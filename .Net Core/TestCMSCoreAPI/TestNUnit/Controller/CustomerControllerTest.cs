using Microsoft.AspNetCore.Mvc;
using Moq;
using ServiceManager.DTO;
using ServiceManager.Interface;
using ServiceManager.ServiceMock;
using TestCMSCoreAPI.Controllers;

namespace TestNUnit.Controller
{
    [TestFixture]
    public class CustomerTest
    {
        private CustomerServiceMock _service;

        [SetUp]
        public void Setup()
        {
            _service = new CustomerServiceMock();
        }

        [Test]
        public async Task Get_WhenCalled_ReturnsOkResult()
        {
            var service = new Mock<ICustomerService>();
            service.Setup(_ => _.GetCustomerList()).ReturnsAsync(_service.GetCustomerList());
            var controller = new CustomerController(service.Object);

            var result = (OkObjectResult) await controller.GetAllCustomers();
            Assert.That(result, Is.TypeOf<OkObjectResult>());
        }

        [Test]
        public async Task Get_WhenCalled_ReturnsAllCustomers()
        {
            var service = new Mock<ICustomerService>();
            service.Setup(_ => _.GetCustomerList()).ReturnsAsync(_service.GetCustomerList());
            var controller = new CustomerController(service.Object);

            var result = (OkObjectResult) await controller.GetAllCustomers();
            Assert.That(result, Is.TypeOf<OkObjectResult>());

            var items = result.Value as List<CustomerDTO.FullDetail>;
            Assert.That(items, Has.Count.EqualTo(3));
        }

        [Test]
        public async Task GetById_UnknownGuidPassed_ReturnsNotFoundResult()
        {
            var guid = Guid.NewGuid();

            var service = new Mock<ICustomerService>();
            service.Setup(_ => _.GetCustomerByID(guid)).ReturnsAsync(_service.GetByID(guid));
            var controller = new CustomerController(service.Object);

            var result = await controller.GetCustomerByID(guid);
            Assert.That(result, Is.TypeOf<NotFoundResult>());
        }

        [Test]
        public async Task GetById_ContainedGuid_ReturnsOKFoundResult()
        {
            var guid = new Guid("78f95907-3b13-4b87-82a4-af5c702111ae");

            var service = new Mock<ICustomerService>();
            service.Setup(_ => _.GetCustomerByID(guid)).ReturnsAsync(_service.GetByID(guid));
            var controller = new CustomerController(service.Object);

            var result = (OkObjectResult) await controller.GetCustomerByID(guid);
            Assert.That(result, Is.TypeOf<OkObjectResult>());

            var customer = result.Value as CustomerDTO.FullDetail;
            Assert.That(customer.Detail.CustomerID, Is.EqualTo("A001"));
        }

    }
}
