using System.Linq.Expressions;

namespace RepositoryManager.Interface
{
    public interface IGenericRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetById(Guid id);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        
    }
}
