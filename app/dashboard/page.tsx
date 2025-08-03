'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';
import { useAppStore } from '@/lib/store';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Heart,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Lightbulb,
  Target,
  Calendar,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const metrics = [
  {
    title: 'Total Reach',
    value: '47,521',
    change: '+12.5%',
    trend: 'up',
    icon: <Eye className="w-4 h-4" />
  },
  {
    title: 'Engagement Rate',
    value: '8.4%',
    change: '+2.1%',
    trend: 'up',
    icon: <Heart className="w-4 h-4" />
  },
  {
    title: 'New Followers',
    value: '1,247',
    change: '-3.2%',
    trend: 'down',
    icon: <Users className="w-4 h-4" />
  },
  {
    title: 'Website Clicks',
    value: '892',
    change: '+18.7%',
    trend: 'up',
    icon: <TrendingUp className="w-4 h-4" />
  }
];

const alerts = [
  {
    id: 1,
    type: 'success',
    title: 'Engagement Spike Detected',
    message: 'Your latest post is performing 45% better than average',
    time: '2 hours ago'
  },
  {
    id: 2,
    type: 'warning',
    title: 'Posting Schedule Gap',
    message: 'No posts scheduled for the next 3 days',
    time: '5 hours ago'
  },
  {
    id: 3,
    type: 'info',
    title: 'Weekly Report Ready',
    message: 'Your performance summary for this week is available',
    time: '1 day ago'
  }
];

const insights = [
  {
    id: 1,
    title: 'Optimal Posting Time',
    description: 'Your audience is most active on Tuesdays at 3 PM',
    action: 'Schedule posts',
    icon: <Calendar className="w-5 h-5" />
  },
  {
    id: 2,
    title: 'Content Performance',
    description: 'Video content generates 3x more engagement than images',
    action: 'Create videos',
    icon: <BarChart3 className="w-5 h-5" />
  },
  {
    id: 3,
    title: 'Audience Growth',
    description: 'Local hashtags increase reach by 40% in your area',
    action: 'Use local tags',
    icon: <Target className="w-5 h-5" />
  }
];

const recentActivity = [
  {
    id: 1,
    action: 'New follower from Facebook',
    user: 'Sarah Johnson',
    time: '5 minutes ago'
  },
  {
    id: 2,
    action: 'Instagram post reached 1,000 views',
    user: 'Coffee Morning Special',
    time: '2 hours ago'
  },
  {
    id: 3,
    action: 'LinkedIn article shared 15 times',
    user: 'Business Growth Tips',
    time: '4 hours ago'
  },
  {
    id: 4,
    action: 'Facebook event created',
    user: 'Weekend Sale Event',
    time: '6 hours ago'
  }
];

export default function DashboardPage() {
  const { user } = useAppStore();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.name?.split(' ')[0] || 'there'}! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your digital presence today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <GlassCard key={index} className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-muted-foreground">{metric.icon}</div>
              <Badge variant={metric.trend === 'up' ? 'default' : 'secondary'} className="text-xs">
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 mr-1" />
                )}
                {metric.change}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold mb-1">{metric.value}</h3>
            <p className="text-sm text-muted-foreground">{metric.title}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Performance Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Performance Overview
              </CardTitle>
              <CardDescription>
                Your engagement metrics over the last 30 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Chart visualization would go here</p>
                  <p className="text-sm text-muted-foreground">Connected to your analytics data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                AI Insights & Recommendations
              </CardTitle>
              <CardDescription>
                Personalized suggestions to improve your performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {insights.map((insight) => (
                  <div key={insight.id} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/20">
                    <div className="text-primary mt-1">{insight.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                      <Button size="sm" variant="outline">
                        {insight.action}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Alerts
              </CardTitle>
              <CardDescription>
                Important updates and notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-3 rounded-lg border-l-4 ${
                      alert.type === 'success'
                        ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                        : alert.type === 'warning'
                        ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20'
                        : 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                    }`}
                  >
                    <h4 className="font-semibold text-sm mb-1">{alert.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest updates from your connected accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.user}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Post
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <PieChart className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Accounts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}