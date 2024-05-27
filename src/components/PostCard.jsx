import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function PostCard({
  title,
  description,
  homeName,
  floor,
  numberOfBedroom,
  numberOfKitchen,
  homeSize,
  numberOfBathroom,
  numberOfDiningRoom,
  haveAnyGarden,
  numberOfBalcony,
  haveTerrace,
  howOldTheHouse,
  moreDetails,
  address,
  landMark,
  nearByPlace,
  howFarFromNearestHospital,
  rent,
  otherCharges,
  totalRent,
  city,
  district,
  state,
  date,
  children,
  ...props
}) {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <Card className={`w-[20rem] sm:w-[30rem] `} {...props}>
      <CardHeader className="space-y-0">
        <CardTitle className="text-[17px] tracking-wide">{title}</CardTitle>
        <CardDescription>{`${date}`}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Home Name</TableCell>
              <TableCell className="text-center">{homeName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Address</TableCell>
              <TableCell className="text-center">{address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">City</TableCell>
              <TableCell className="text-center">{city}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">District</TableCell>
              <TableCell className="text-center">{district}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">State</TableCell>
              <TableCell className="text-center">{state}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Nearby Place</TableCell>
              <TableCell className="text-center">{nearByPlace}</TableCell>
            </TableRow>
            {seeMore === false ? (
              <TableRow className="hover:bg-black">
                <TableCell className="font-medium"></TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    className="h-[2rem] rounded-full mt-5"
                    onClick={() => setSeeMore(true)}
                  >
                    See More
                  </Button>
                </TableCell>
              </TableRow>
            ) : (
              <div></div>
            )}
            {seeMore && (
              <>
                <TableRow>
                  <TableCell className="font-medium">Floor</TableCell>
                  <TableCell className="text-center">{floor}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">No. of Bedroom</TableCell>
                  <TableCell className="text-center">
                    {numberOfBedroom}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">No. of Kitchen</TableCell>
                  <TableCell className="text-center">
                    {numberOfKitchen}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">No. of Bathroom</TableCell>
                  <TableCell className="text-center">
                    {numberOfBathroom}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    No. of Diningroom
                  </TableCell>
                  <TableCell className="text-center">
                    {numberOfDiningRoom}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">No. of Balcony</TableCell>
                  <TableCell className="text-center">
                    {numberOfBalcony}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Is There Any Garden
                  </TableCell>
                  <TableCell className="text-center">
                    {haveAnyGarden ? "Yes" : "No"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Is There Any Terrace
                  </TableCell>
                  <TableCell className="text-center">
                    {haveTerrace ? "Yes" : "No"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Home Size <span className="opacity-70">(in BHK)</span>
                  </TableCell>
                  <TableCell className="text-center">{homeSize}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Nearest Hospital Distance{" "}
                    <span className="opacity-70">(in minutes)</span>
                  </TableCell>
                  <TableCell className="text-center">
                    {howFarFromNearestHospital}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Rent</TableCell>
                  <TableCell className="text-center">{rent}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Other Charges</TableCell>
                  <TableCell className="text-center">{otherCharges}</TableCell>
                </TableRow>
                <TableRow>
                  <div className="mt-2 mb-2 w-full">
                    <Label className="font-bold">More</Label>
                    <p className="mt-2 w-full opacity-80">{moreDetails}</p>
                  </div>
                </TableRow>
                <TableRow className="bg-sky-950">
                  <TableCell>
                    Total Rent <span className="opacity-70">(per month)</span>
                  </TableCell>
                  <TableCell className="text-center">{totalRent}</TableCell>
                </TableRow>
                <TableRow className="hover:bg-black">
                  <TableCell className="font-medium"></TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      className="h-[2rem] rounded-full mt-5"
                      onClick={() => setSeeMore(false)}
                    >
                      See Less
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
        {children}
      </CardContent>
    </Card>
  );
}

export default PostCard;
