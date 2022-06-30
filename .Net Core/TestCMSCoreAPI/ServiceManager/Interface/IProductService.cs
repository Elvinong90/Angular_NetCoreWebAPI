using ServiceManager.DTO;

namespace ServiceManager.Interface
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDTO.FullDetail>> GetProductList();

        Task<ProductDTO.FullDetail> GetProductByID(Guid ID);

        Task<bool> AddProduct(ProductDTO.OnAdd input, string UserID);

        Task<bool> UpdateProduct(Guid ID, ProductDTO.OnUpdate input, string UserID);

        Task<bool> DeleteProduct(Guid ID, string UserID);
    }
}
