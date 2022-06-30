using AutoMapper;
using DataManager.Models;
using RepositoryManager;
using ServiceManager.DTO;
using ServiceManager.Interface;

namespace ServiceManager.Service
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public ProductService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ProductDTO.FullDetail>> GetProductList()
        {
            var products = await _unitOfWork.Products.GetAll();
            var productDTOs = _mapper.Map<IEnumerable<ProductDTO.FullDetail>>(products);
            return productDTOs;
        }

        public async Task<ProductDTO.FullDetail> GetProductByID(Guid ID)
        {
            var Product = await _unitOfWork.Products.GetById(ID);
            var ProductDTO = _mapper.Map<ProductDTO.FullDetail>(Product);
            return ProductDTO;
        }

        public async Task<bool> AddProduct(ProductDTO.OnAdd input, string UserID)
        {
            var product = _mapper.Map<Product>(input);

            product.ID = Guid.NewGuid();
            product.Deleted = false;
            product.CreatedBy = UserID;
            product.DateCreated = DateTime.UtcNow;

            _unitOfWork.Products.Add(product);
            int result = await _unitOfWork.Commit();

            return Convert.ToBoolean(result);
        }

        public async Task<bool> UpdateProduct(Guid ID, ProductDTO.OnUpdate input, string UserID)
        {
            var product = await _unitOfWork.Products.GetById(ID);

            product.ProductNo = input.ProductNo;
            product.Description = input.Description;
            product.Price = input.Price;
            product.ModifiedBy = UserID;
            product.DateModified = DateTime.UtcNow;

            _unitOfWork.Products.Update(product);
            int result = await _unitOfWork.Commit();

            return Convert.ToBoolean(result);
        }

        public async Task<bool> DeleteProduct(Guid ID, string UserID)
        {
            var product = await _unitOfWork.Products.GetById(ID);

            product.Deleted = true;
            product.ModifiedBy = UserID;
            product.DateModified = DateTime.UtcNow;

            _unitOfWork.Products.Update(product);
            int result = await _unitOfWork.Commit();

            return Convert.ToBoolean(result);
        }
    }
}
