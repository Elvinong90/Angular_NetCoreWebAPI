using Microsoft.AspNetCore.Mvc;
using ServiceManager.DTO;
using ServiceManager.Interface;
using TestCMSCoreAPI.Helpers;

namespace TestCMSCoreAPI.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private const string UserID = "dceb4838-97bf-4223-8737-0068c8d07fe2";
        private readonly IProductService productService;
        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await productService.GetProductList();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductByID(Guid ID)
        {
            var product = await productService.GetProductByID(ID);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] ProductDTO.OnAdd Request)
        {
            bool result = await productService.AddProduct(Request, UserID);

            var output = new CommonDto.GenericObject()
            {
                Status = result,
                Message = result ? Constants.Message.msgCreateOK : Constants.Message.msgCreateNotOK
            };
            
            return Ok(output);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(Guid ID, [FromBody] ProductDTO.OnUpdate Request)
        {
            bool result = await productService.UpdateProduct(ID, Request, UserID);

            var output = new CommonDto.GenericObject()
            {
                Status = result,
                Message = result ? Constants.Message.msgUpdateOK : Constants.Message.msgUpdateNotOK
            };

            return Ok(output);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(Guid ID)
        {
            bool result = await productService.DeleteProduct(ID, UserID);

            var output = new CommonDto.GenericObject()
            {
                Status = result,
                Message = result ? Constants.Message.msgDeleteOK : Constants.Message.msgDeleteNotOK
            };

            return Ok(output);
        }
    }
}
