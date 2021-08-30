namespace Append.Blazor.Notifications
{
    public class NotificationAction
    {
        /// <summary>
        /// The name of the action, which can be used to identify the clicked action.
        /// </summary>
        public string Action { get; set; }
        /// <summary>
        /// The string describing the action that is displayed to the user.
        /// </summary>
        public string Title { get; set; }
        /// <summary>
        /// The URL of the image used to represent the notification when there is not enough space to display the notification itself.
        /// </summary>
        public string Icon { get; set; }
    }
}
