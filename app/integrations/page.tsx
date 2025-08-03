'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Youtube,
  Globe,
  Check,
  Settings,
  ExternalLink,
  Plus
} from 'lucide-react';
import { toast } from 'react-hot-toast';

const integrations = [
  {
    id: 'facebook',
    name: 'Facebook',
    description: 'Connect your Facebook pages and track engagement metrics',
    icon: <Facebook className="w-8 h-8" />,
    color: 'bg-blue-600',
    connected: true,
    accounts: ['Main Business Page', 'Event Page'],
    features: ['Post Analytics', 'Audience Insights', 'Ad Performance']
  },
  {
    id: 'instagram',
    name: 'Instagram',
    description: 'Monitor your Instagram business account performance',
    icon: <Instagram className="w-8 h-8" />,
    color: 'bg-pink-600',
    connected: true,
    accounts: ['@localbusiness'],
    features: ['Story Analytics', 'Hashtag Performance', 'Follower Growth']
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    description: 'Track your professional network and company page',
    icon: <Linkedin className="w-8 h-8" />,
    color: 'bg-blue-700',
    connected: false,
    accounts: [],
    features: ['Company Page Analytics', 'Employee Advocacy', 'Lead Generation']
  },
  {
    id: 'twitter',
    name: 'Twitter',
    description: 'Analyze your tweets and engagement patterns',
    icon: <Twitter className="w-8 h-8" />,
    color: 'bg-sky-500',
    connected: false,
    accounts: [],
    features: ['Tweet Analytics', 'Follower Analysis', 'Hashtag Tracking']
  },
  {
    id: 'youtube',
    name: 'YouTube',
    description: 'Monitor your channel performance and video analytics',
    icon: <Youtube className="w-8 h-8" />,
    color: 'bg-red-600',
    connected: false,
    accounts: [],
    features: ['Video Performance', 'Subscriber Growth', 'Revenue Tracking']
  },
  {
    id: 'google-business',
    name: 'Google Business',
    description: 'Track your local business listing and reviews',
    icon: <Globe className="w-8 h-8" />,
    color: 'bg-green-600',
    connected: true,
    accounts: ['Local Business Listing'],
    features: ['Review Monitoring', 'Local Search Performance', 'Customer Insights']
  }
];

export default function IntegrationsPage() {
  const [connectedIntegrations, setConnectedIntegrations] = useState(
    integrations.filter(i => i.connected).map(i => i.id)
  );

  const handleToggleIntegration = (integrationId: string) => {
    const isConnected = connectedIntegrations.includes(integrationId);
    
    if (isConnected) {
      setConnectedIntegrations(prev => prev.filter(id => id !== integrationId));
      toast.success('Integration disconnected');
    } else {
      setConnectedIntegrations(prev => [...prev, integrationId]);
      toast.success('Integration connected successfully!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Integrations</h1>
        <p className="text-muted-foreground">
          Connect your social media accounts and third-party tools to get comprehensive insights.
        </p>
      </div>

      {/* Connected Integrations Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">
              {connectedIntegrations.length}
            </div>
            <p className="text-sm text-muted-foreground">Connected Platforms</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">
              {integrations.reduce((acc, integration) => 
                acc + (connectedIntegrations.includes(integration.id) ? integration.accounts.length : 0), 0)}
            </div>
            <p className="text-sm text-muted-foreground">Active Accounts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Data Monitoring</p>
          </CardContent>
        </Card>
      </div>

      {/* Integrations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration) => {
          const isConnected = connectedIntegrations.includes(integration.id);
          
          return (
            <Card key={integration.id} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg text-white ${integration.color}`}>
                      {integration.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{integration.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant={isConnected ? 'default' : 'secondary'} className="text-xs">
                          {isConnected ? (
                            <>
                              <Check className="w-3 h-3 mr-1" />
                              Connected
                            </>
                          ) : (
                            'Not Connected'
                          )}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Switch
                    checked={isConnected}
                    onCheckedChange={() => handleToggleIntegration(integration.id)}
                  />
                </div>
                <CardDescription>{integration.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {isConnected && integration.accounts.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Connected Accounts:</h4>
                    <ul className="space-y-1">
                      {integration.accounts.map((account, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <Check className="w-3 h-3 mr-2 text-green-500" />
                          {account}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {integration.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-2">
                  {isConnected ? (
                    <>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Settings className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                      <Button size="sm" variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Account
                      </Button>
                    </>
                  ) : (
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => handleToggleIntegration(integration.id)}
                    >
                      Connect {integration.name}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Help Section */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Need Help Setting Up Integrations?</CardTitle>
          <CardDescription>
            Our support team is here to help you connect your accounts and get the most out of InsightNode.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
            <Button variant="outline">
              Contact Support
            </Button>
            <Button variant="outline">
              Schedule Setup Call
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}