using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using ServiceManager.Interface;
using ServiceManager.Mapper;
using ServiceManager.Service;

namespace ServiceManager
{
    public static class IServiceCollectionExtension
    {
        public static IServiceCollection AddServiceManagerCollection(this IServiceCollection services)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new CustomerProfile());
                cfg.AddProfile(new ProductProfile());
            });

            var mapper = config.CreateMapper();
            services.AddSingleton(mapper);

            services.AddTransient<IProductService, ProductService>();
            services.AddTransient<ICustomerService, CustomerService>();

            return services;
        }
    }
}
