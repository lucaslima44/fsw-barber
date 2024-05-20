import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="flex justify-between p-5 py-0">
        <div className="flex flex-col gap-2 py-5">
          <Badge className="hover:bg[#221C3D] w-fit bg-[#221C3D] text-primary">
            Confirmado
          </Badge>
          <h2 className="font-bold">Corte de Cabelo</h2>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">Vintage Barber</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-l border-solid border-secondary px-3">
          <p className="text-sm">Maio</p>
          <p className="text-2xl">19</p>
          <p className="text-sm">07:45</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
