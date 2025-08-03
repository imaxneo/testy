'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useAppStore } from '@/lib/store';
import { 
  Target, 
  Store, 
  Users, 
  TrendingUp, 
  Facebook, 
  Instagram, 
  Linkedin,
  ChevronRight,
  ChevronLeft,
  Check
} from 'lucide-react';
import { toast } from 'react-hot-toast';

const steps = [
  {
    title: 'What are your goals?',
    description: 'Select what you want to achieve with InsightNode'
  },
  {
    title: 'Tell us about your business',
    description: 'Help us understand your business better'
  },
  {
    title: 'Connect your accounts',
    description: 'Link your social media accounts for better insights'
  }
];

const goals = [
  {
    id: 'increase-engagement',
    icon: <Users className="w-6 h-6" />,
    title: 'Increase Engagement',
    description: 'Boost likes, comments, and shares on your content'
  },
  {
    id: 'grow-followers',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Grow Followers',
    description: 'Expand your social media audience'
  },
  {
    id: 'drive-traffic',
    icon: <Target className="w-6 h-6" />,
    title: 'Drive Website Traffic',
    description: 'Get more visitors to your website from social media'
  },
  {
    id: 'local-awareness',
    icon: <Store className="w-6 h-6" />,
    title: 'Local Brand Awareness',
    description: 'Increase visibility in your local community'
  }
];

const businessTypes = [
  { id: 'restaurant', name: 'Restaurant/Food Service', emoji: '🍽️' },
  { id: 'retail', name: 'Retail Store', emoji: '🛍️' },
  { id: 'services', name: 'Professional Services', emoji: '💼' },
  { id: 'fitness', name: 'Fitness/Wellness', emoji: '💪' },
  { id: 'beauty', name: 'Beauty/Salon', emoji: '💄' },
  { id: 'healthcare', name: 'Healthcare', emoji: '🏥' },
  { id: 'education', name: 'Education/Training', emoji: '📚' },
  { id: 'other', name: 'Other', emoji: '🏢' }
];

const socialPlatforms = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6" />,
    color: 'bg-blue-600'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    color: 'bg-pink-600'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />,
    color: 'bg-blue-700'
  }
];

export default function OnboardingPage() {
  const router = useRouter();
  const { onboardingStep, setOnboardingStep, onboardingData, setOnboardingData } = useAppStore();
  const [selectedGoals, setSelectedGoals] = useState<string[]>(onboardingData.goals);
  const [selectedBusinessType, setSelectedBusinessType] = useState(onboardingData.businessType);
  const [connectedAccounts, setConnectedAccounts] = useState<string[]>(onboardingData.connectedAccounts);

  const currentStep = Math.max(0, Math.min(onboardingStep, steps.length - 1));
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep === 0) {
      if (selectedGoals.length === 0) {
        toast.error('Please select at least one goal');
        return;
      }
      setOnboardingData({ goals: selectedGoals });
    } else if (currentStep === 1) {
      if (!selectedBusinessType) {
        toast.error('Please select your business type');
        return;
      }
      setOnboardingData({ businessType: selectedBusinessType });
    }

    if (currentStep < steps.length - 1) {
      setOnboardingStep(currentStep + 1);
    } else {
      // Complete onboarding
      setOnboardingData({ connectedAccounts });
      toast.success('Welcome to InsightNode!');
      router.push('/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setOnboardingStep(currentStep - 1);
    }
  };

  const handleGoalToggle = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleConnectAccount = (platformId: string) => {
    setConnectedAccounts(prev => 
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
    toast.success(`${platformId} account ${connectedAccounts.includes(platformId) ? 'disconnected' : 'connected'}!`);
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Step {currentStep + 1} of {steps.length}</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
            <CardDescription>{steps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Step 1: Goals */}
            {currentStep === 0 && (
              <div className="space-y-4">
                {goals.map((goal) => (
                  <div
                    key={goal.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedGoals.includes(goal.id)
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => handleGoalToggle(goal.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-primary mt-1">{goal.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{goal.title}</h3>
                          {selectedGoals.includes(goal.id) && (
                            <Check className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{goal.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 2: Business Type */}
            {currentStep === 1 && (
              <div className="grid grid-cols-2 gap-4">
                {businessTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all text-center ${
                      selectedBusinessType === type.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedBusinessType(type.id)}
                  >
                    <div className="text-2xl mb-2">{type.emoji}</div>
                    <div className="font-semibold text-sm">{type.name}</div>
                    {selectedBusinessType === type.id && (
                      <Check className="w-5 h-5 text-primary mx-auto mt-2" />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Step 3: Connect Accounts */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <p className="text-center text-muted-foreground mb-6">
                  Connect your social media accounts to get started. You can always add more later.
                </p>
                {socialPlatforms.map((platform) => (
                  <div
                    key={platform.id}
                    className="flex items-center justify-between p-4 rounded-lg border"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg text-white ${platform.color}`}>
                        {platform.icon}
                      </div>
                      <span className="font-medium">{platform.name}</span>
                    </div>
                    <Button
                      variant={connectedAccounts.includes(platform.id) ? "secondary" : "default"}
                      onClick={() => handleConnectAccount(platform.id)}
                    >
                      {connectedAccounts.includes(platform.id) ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Connected
                        </>
                      ) : (
                        'Connect'
                      )}
                    </Button>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Don't worry! You can skip this step and connect accounts later from your dashboard.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button onClick={handleNext}>
                {currentStep === steps.length - 1 ? (
                  'Complete Setup'
                ) : (
                  <>
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}