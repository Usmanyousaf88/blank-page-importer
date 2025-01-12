import { useState } from 'react';
import { Input } from '../../../../components/ui/input';
import { Label } from '../../../../components/ui/label';
import { Button } from '../../../../components/ui/Button/button';
import { Badge } from '../../../../components/ui/badge';
import { Eye, EyeOff, Search, AtSign, Lock, User, AlertCircle } from 'lucide-react';

const TextInputs = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setEmailError('Email is required');
    } else if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Text Inputs</h2>
        <p className="text-muted-foreground mb-6">
          Various text input styles with validation and interactive states.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Basic Input */}
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              id="username"
              placeholder="Enter your username"
              className="pl-10"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Choose a unique username for your account.
          </p>
        </div>

        {/* Email Input with Validation */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`pl-10 ${emailError ? 'border-red-500 focus:ring-red-500' : ''}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
            />
            {emailError && (
              <div className="absolute right-3 top-2.5 text-red-500">
                <AlertCircle className="h-5 w-5" />
              </div>
            )}
          </div>
          {emailError && (
            <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
              {emailError}
            </p>
          )}
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="pl-10 pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-6 w-6"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="flex gap-2 mt-2">
            <Badge variant="secondary" className="text-xs">8+ characters</Badge>
            <Badge variant="secondary" className="text-xs">1 number</Badge>
            <Badge variant="secondary" className="text-xs">1 special char</Badge>
          </div>
        </div>

        {/* Search Input */}
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              id="search"
              type="search"
              placeholder="Search..."
              className="pl-10"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Press <kbd className="px-2 py-0.5 rounded bg-muted">⌘K</kbd> to search quickly
          </p>
        </div>

        {/* Disabled Input */}
        <div className="space-y-2">
          <Label htmlFor="disabled">Disabled Input</Label>
          <Input
            id="disabled"
            disabled
            value="This input is disabled"
          />
          <p className="text-sm text-muted-foreground">
            This input cannot be modified
          </p>
        </div>

        {/* Read Only Input */}
        <div className="space-y-2">
          <Label htmlFor="readonly">Read Only</Label>
          <Input
            id="readonly"
            readOnly
            value="This is read only content"
          />
          <p className="text-sm text-muted-foreground">
            This input can be copied but not modified
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextInputs;
