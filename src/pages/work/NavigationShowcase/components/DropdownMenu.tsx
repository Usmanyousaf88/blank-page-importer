import Card from '../../../../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';

const DropdownMenu = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Dropdown Menu</Card.Title>
      </Card.Header>
      <Card.Content>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="account">Account settings</SelectItem>
            <SelectItem value="support">Support</SelectItem>
            <SelectItem value="license">License</SelectItem>
            <SelectItem value="signout" className="text-destructive">Sign out</SelectItem>
          </SelectContent>
        </Select>
      </Card.Content>
    </Card>
  );
};

export default DropdownMenu;
