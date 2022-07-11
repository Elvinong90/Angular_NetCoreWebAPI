using Microsoft.AspNetCore.Mvc;
using ServiceManager.DTO;
using ServiceManager.Interface;

namespace TestCMSCoreAPI.Controllers
{
    [Route("api/Customer")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private const string UserID = "dceb4838-97bf-4223-8737-0068c8d07fe2";
        private readonly ICustomerService customerService;
        public CustomerController(ICustomerService customerService)
        {
            this.customerService = customerService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCustomers()
        {
            var customers = await customerService.GetCustomerList();
            return Ok(customers);
        }

        [HttpGet("{ID}")]
        public async Task<IActionResult> GetCustomerByID(Guid ID)
        {
            var customer = await customerService.GetCustomerByID(ID);

            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCustomer([FromBody] CustomerDTO.OnAdd Request)
        {
            bool result = await customerService.AddCustomer(Request, UserID);
            return Ok(result);
        }

        [HttpPut("{ID}")]
        public async Task<IActionResult> UpdateCustomer(Guid ID, [FromBody] CustomerDTO.OnUpdate Request)
        {
            bool result = await customerService.UpdateCustomer(ID, Request, UserID);
            return Ok(result);
        }

        [HttpDelete("{ID}")]
        public async Task<IActionResult> DeleteCustomer(Guid ID)
        {
            bool result = await customerService.DeleteCustomer(ID, UserID);
            return Ok(result);
        }
    }
}
