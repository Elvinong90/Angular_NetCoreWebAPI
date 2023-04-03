using ServiceManager.DTO;

namespace ServiceManager.ServiceMock
{
    public class CustomerServiceMock
    {
        private readonly List<CustomerDTO.FullDetail> customers;

        public CustomerServiceMock()
        {
            customers = new List<CustomerDTO.FullDetail>()
            {
                new CustomerDTO.FullDetail() 
                {
                    ID = new Guid("78f95907-3b13-4b87-82a4-af5c702111ae"),
                    Detail = new CustomerDTO.Detail()
                    {
                        CustomerID = "A001",
                        FullName = "Benjamin",
                        IDType = "NRIC",
                        IDNo = "8003"
                    }
                },
                new CustomerDTO.FullDetail()
                {
                    ID = new Guid("a2ab1dc8-2d10-4c3f-a413-43c5f5208041"),
                    Detail = new CustomerDTO.Detail()
                    {
                        CustomerID = "A002",
                        FullName = "Elvin",
                        IDType = "NRIC",
                        IDNo = "8002"
                    }
                },
                new CustomerDTO.FullDetail()
                {
                    ID = new Guid("b1421b0b-8942-4693-895b-0573b77cd2fc"),
                    Detail = new CustomerDTO.Detail()
                    {
                        CustomerID = "A001",
                        FullName = "Allan",
                        IDType = "NRIC",
                        IDNo = "8001"
                    }
                },
            };
        }

        public List<CustomerDTO.FullDetail> GetCustomerList()
        {
            return customers;
        }

        public CustomerDTO.FullDetail GetByID(Guid ID)
        {
            return customers.Where(c => c.ID == ID).FirstOrDefault();
        }
    }
}
