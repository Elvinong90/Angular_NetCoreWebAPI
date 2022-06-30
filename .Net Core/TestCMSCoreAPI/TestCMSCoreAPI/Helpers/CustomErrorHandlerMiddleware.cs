using System.Net;
using System.Text.Json;

namespace TestCMSCoreAPI.Helpers
{
    public class CustomErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;

        public CustomErrorHandlerMiddleware(RequestDelegate next, ILogger<CustomErrorHandlerMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception error)
            {
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                _logger.LogError(error, error.Message);

                var result = JsonSerializer.Serialize(new { Message = error?.Message });
                await context.Response.WriteAsync(result);
            }
        }
    }
}
