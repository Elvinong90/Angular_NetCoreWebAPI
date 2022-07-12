using AutoMapper;
using DataManager.Models;
using ServiceManager.DTO;

namespace ServiceManager.Mapper
{
    public class CustomerProfile : Profile
    {
        public CustomerProfile()
        {
            CreateMap<Customer, CustomerDTO.FullDetail>()
                .ForMember(src => src.Detail, opt => opt.MapFrom(src => new CustomerDTO.Detail
                {
                    CustomerID = src.CustomerID,
                    FullName = src.FullName,
                    IDType = src.IDType,
                    IDNo = src.IDNo,
                })); 
            
            CreateMap<CustomerDTO.OnAdd, Customer>();
            CreateMap<CustomerDTO.OnUpdate, Customer>();
        }
    }
}
