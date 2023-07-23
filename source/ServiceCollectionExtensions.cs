using Microsoft.Extensions.DependencyInjection;

namespace Append.Blazor.Notifications
{
    /// <summary>
    /// Extension methods for AspNet service registration.
    /// </summary>
    public static class ServiceCollectionExtensions
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection AddNotifications(this IServiceCollection services)
        {
            return services.AddScoped<INotificationService, NotificationService>();
        }
    }
}