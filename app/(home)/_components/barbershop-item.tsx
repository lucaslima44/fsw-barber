"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  };

  return (
    <Card className="roundend-2xl min-w-full max-w-full">
      <CardContent className="px-1 py-0 pt-1">
        <div className="relative h-[159px] w-full">
          <div className="absolute left-2 top-2 z-50">
            <Badge
              variant="secondary"
              className="left-3 top-3 flex items-center gap-1 opacity-90"
            >
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>
            </Badge>
          </div>

          <Image
            alt={barbershop.name}
            src={barbershop.imageUrl}
            style={{
              objectFit: "cover",
            }}
            fill
            className="rounded-2xl"
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="mt-2 overflow-hidden text-ellipsis text-nowrap font-bold">
            {barbershop.name}
          </h2>
          <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
            {barbershop.address}
          </p>
          <Button
            className="mt-3 w-full"
            variant="secondary"
            onClick={handleBookingClick}
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
