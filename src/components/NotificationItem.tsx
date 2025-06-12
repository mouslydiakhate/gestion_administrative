
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Notification } from "@/types/database";
import { Bell, Check, Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (notificationId: string) => void;
}

const NotificationItem = ({ notification, onMarkAsRead }: NotificationItemProps) => {
  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'INFO':
        return <Info className="w-4 h-4 text-blue-500" />;
      case 'WARNING':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'SUCCESS':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'ERROR':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTypeBadgeColor = (type: Notification['type']) => {
    switch (type) {
      case 'INFO':
        return 'bg-blue-100 text-blue-800';
      case 'WARNING':
        return 'bg-yellow-100 text-yellow-800';
      case 'SUCCESS':
        return 'bg-green-100 text-green-800';
      case 'ERROR':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={`${!notification.isLue ? 'bg-blue-50 border-blue-200' : ''} transition-all`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between space-x-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              {getTypeIcon(notification.type)}
              <h3 className="font-semibold text-sm">{notification.titre}</h3>
              <Badge className={getTypeBadgeColor(notification.type)}>
                {notification.type}
              </Badge>
              {!notification.isLue && (
                <Badge variant="secondary" className="text-xs">
                  Nouveau
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
            <p className="text-xs text-gray-400">
              {new Date(notification.dateEnvoi).toLocaleString()}
            </p>
          </div>
          
          {!notification.isLue && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onMarkAsRead(notification.id)}
              className="shrink-0"
            >
              <Check className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationItem;
