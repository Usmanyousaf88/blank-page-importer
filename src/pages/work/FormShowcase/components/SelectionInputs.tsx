import { useState } from 'react';
import { Label } from '../../../../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../../../../components/ui/radio-group';
import { Checkbox } from '../../../../components/ui/checkbox';
import { Switch } from '../../../../components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';
import { Badge } from '../../../../components/ui/badge';
import { Check, ChevronsUpDown } from 'lucide-react';

const SelectionInputs = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('hobby');
  const [selectedTheme, setSelectedTheme] = useState('system');
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [securityEmails, setSecurityEmails] = useState(true);

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Selection Inputs</h2>
        <p className="text-muted-foreground mb-6">
          Various selection input styles for different use cases.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Radio Group - Subscription Plans */}
        <div className="space-y-4">
          <Label>Subscription Plan</Label>
          <RadioGroup
            value={selectedPlan}
            onValueChange={setSelectedPlan}
            className="grid gap-4 md:grid-cols-3"
          >
            <Label
              htmlFor="hobby"
              className={`flex flex-col items-start justify-between rounded-lg border p-4 cursor-pointer
                ${selectedPlan === 'hobby' ? 'border-primary bg-primary/5' : 'border-border'}`}
            >
              <div className="flex w-full items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium leading-none">Hobby</p>
                  <p className="text-sm text-muted-foreground">
                    Perfect for side projects
                  </p>
                </div>
                <RadioGroupItem value="hobby" id="hobby" />
              </div>
              <div className="mt-4">
                <Badge variant="secondary">$9/month</Badge>
              </div>
            </Label>
            <Label
              htmlFor="pro"
              className={`flex flex-col items-start justify-between rounded-lg border p-4 cursor-pointer
                ${selectedPlan === 'pro' ? 'border-primary bg-primary/5' : 'border-border'}`}
            >
              <div className="flex w-full items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium leading-none">Pro</p>
                  <p className="text-sm text-muted-foreground">
                    For professional developers
                  </p>
                </div>
                <RadioGroupItem value="pro" id="pro" />
              </div>
              <div className="mt-4">
                <Badge variant="secondary">$19/month</Badge>
              </div>
            </Label>
            <Label
              htmlFor="team"
              className={`flex flex-col items-start justify-between rounded-lg border p-4 cursor-pointer
                ${selectedPlan === 'team' ? 'border-primary bg-primary/5' : 'border-border'}`}
            >
              <div className="flex w-full items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium leading-none">Team</p>
                  <p className="text-sm text-muted-foreground">
                    For teams of all sizes
                  </p>
                </div>
                <RadioGroupItem value="team" id="team" />
              </div>
              <div className="mt-4">
                <Badge variant="secondary">$49/month</Badge>
              </div>
            </Label>
          </RadioGroup>
        </div>

        {/* Theme Selector */}
        <div className="space-y-4">
          <Label>Theme Preference</Label>
          <Select value={selectedTheme} onValueChange={setSelectedTheme}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a theme" />
              <ChevronsUpDown className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">
                <div className="flex items-center gap-2">
                  <span>Light</span>
                  {selectedTheme === 'light' && <Check className="h-4 w-4" />}
                </div>
              </SelectItem>
              <SelectItem value="dark">
                <div className="flex items-center gap-2">
                  <span>Dark</span>
                  {selectedTheme === 'dark' && <Check className="h-4 w-4" />}
                </div>
              </SelectItem>
              <SelectItem value="system">
                <div className="flex items-center gap-2">
                  <span>System</span>
                  {selectedTheme === 'system' && <Check className="h-4 w-4" />}
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Notification Settings */}
        <div className="space-y-4">
          <Label>Notification Settings</Label>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications when someone mentions you
                </p>
              </div>
              <Switch
                checked={notificationsEnabled}
                onCheckedChange={setNotificationsEnabled}
              />
            </div>
            <div className="flex flex-col gap-4 rounded-lg border p-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="marketing"
                  checked={marketingEmails}
                  onCheckedChange={(checked) => setMarketingEmails(checked as boolean)}
                />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="marketing">Marketing emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new products and features
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="security"
                  checked={securityEmails}
                  onCheckedChange={(checked) => setSecurityEmails(checked as boolean)}
                />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="security">Security emails</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about your account security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionInputs;
