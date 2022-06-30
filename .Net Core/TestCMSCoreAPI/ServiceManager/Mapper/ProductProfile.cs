
using AutoMapper;
using DataManager.Models;
using ServiceManager.DTO;

namespace ServiceManager.Mapper
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductDTO.FullDetail>()
                .ForMember(src => src.Detail, opt => opt.MapFrom(src => new ProductDTO.Detail
                {
                    ProductNo = src.ProductNo,
                    Description = src.Description,
                    Price = src.Price,
                }));

            CreateMap<ProductDTO.OnAdd, Product>();
            CreateMap<ProductDTO.OnUpdate, Product>();
        }
    }
}
