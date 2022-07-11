using DataManager;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RepositoryManager.Interface;

namespace RepositoryManager.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        protected readonly DBContext _context;
        protected readonly ILogger _logger;
        private DbSet<T> _dbSet;

        public GenericRepository(DBContext context, ILogger logger)
        {
            this._context = context;
            this._logger = logger;
            this._dbSet = context.Set<T>();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _dbSet.AsNoTracking().ToListAsync();
        }

        public async Task<T> GetById(Guid id)
        {
            return await _dbSet.FindAsync(id);
        }

        public void Add(T entity)
        {
            _dbSet.Add(entity);
        }

        public void Update(T entity)
        {
            _dbSet.Update(entity);
        }

        public void Delete(T entity)
        {
            _dbSet.Remove(entity);
        }
    }
}
