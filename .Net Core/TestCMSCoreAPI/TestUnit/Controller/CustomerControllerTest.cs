using Microsoft.AspNetCore.Mvc;
using Moq;
using ServiceManager.DTO;
using ServiceManager.Interface;
using TestCMSCoreAPI.Controllers;
using TestUnit.Service;

namespace TestUnit.Controller
{
    public class CustomerTest
    {
        private readonly CustomerServiceMock _service;

        public CustomerTest()
        {
            _service = new CustomerServiceMock();
        }

        [Fact]
        public async Task Get_WhenCalled_ReturnsOkResult()
        {
            var service = new Mock<ICustomerService>();
            service.Setup(_ => _.GetCustomerList()).ReturnsAsync(_service.GetCustomerList());
            var controller = new CustomerController(service.Object);

            var result = await controller.GetAllCustomers() as OkObjectResult;
            Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async Task Get_WhenCalled_ReturnsAllCustomers()
        {
            var service = new Mock<ICustomerService>();
            service.Setup(_ => _.GetCustomerList()).ReturnsAsync(_service.GetCustomerList());
            var controller = new CustomerController(service.Object);

            var result = (OkObjectResult) await controller.GetAllCustomers();
            var items = Assert.IsType<List<CustomerDTO.FullDetail>>(result.Value);
            Assert.Equal(3, items.Count);
        }

        [Fact]
        public async Task GetById_UnknownGuidPassed_ReturnsNotFoundResult()
        {
            var guid = Guid.NewGuid();

            var service = new Mock<ICustomerService>();
            service.Setup(_ => _.GetCustomerByID(guid)).ReturnsAsync(_service.GetByID(guid));
            var controller = new CustomerController(service.Object);

            var result = await controller.GetCustomerByID(guid);
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task GetById_ContainedGuid_ReturnsOKFoundResult()
        {
            var guid = new Guid("78f95907-3b13-4b87-82a4-af5c702111ae");

            var service = new Mock<ICustomerService>();
            service.Setup(_ => _.GetCustomerByID(guid)).ReturnsAsync(_service.GetByID(guid));
            var controller = new CustomerController(service.Object);

            var result = (OkObjectResult) await controller.GetCustomerByID(guid);
            var customer = Assert.IsType<CustomerDTO.FullDetail>(result.Value);

            Assert.IsType<OkObjectResult>(result);
            Assert.Equal("A001", customer.Detail.CustomerID);
        }

    }
}
