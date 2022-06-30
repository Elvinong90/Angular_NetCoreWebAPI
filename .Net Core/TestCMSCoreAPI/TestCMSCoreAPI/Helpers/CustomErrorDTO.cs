namespace TestCMSCoreAPI.Helpers
{
    public class CustomErrorDTO
    {
        public int StatusCode { get;set; }
        public string Message { get;set; }
        public string Details { get;set; }

        public CustomErrorDTO(int statusCode, string message = "", string details = "")
        {
            StatusCode = statusCode;
            Message = message;
            Details = details;
        }
    }
}
