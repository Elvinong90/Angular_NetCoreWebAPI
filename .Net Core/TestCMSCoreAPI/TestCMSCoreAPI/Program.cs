
using Microsoft.EntityFrameworkCore;
using DataManager;
using RepositoryManager;
using ServiceManager;
using TestCMSCoreAPI.Helper;
using TestCMSCoreAPI.Helpers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<DBContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DBConnection");
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});


builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();
builder.Services.AddServiceManagerCollection();

builder.Services.AddControllers(options =>
{
    options.Filters.Add<CustomValidationFilter>();
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("LocalURL",
        builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.CustomSchemaIds(type => type.ToString());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<CustomErrorHandlerMiddleware>();

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
