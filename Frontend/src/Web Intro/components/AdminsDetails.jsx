import React from "react";
import { 
  BorderGlide, 
  BorderGlideCard, 
  BorderGlideContent, 
  BorderGlideHeader, 
  BorderGlideTitle, 
  BorderGlideDescription, 
  BorderGlideFooter 
} from "../../components/ui/border-glide";

export default function AdminsDetails() {
  return (
    <BorderGlide>
      <BorderGlideCard>
        <BorderGlideContent>
          <BorderGlideHeader>
            <BorderGlideTitle>Lana Akash</BorderGlideTitle>
            <BorderGlideDescription>@lanaakash</BorderGlideDescription>
          </BorderGlideHeader>
          <div className="flex flex-col items-center justify-center py-4">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&h=256&facepad=2"
              alt="Lana Akash"
              className="rounded-full border-4 border-blue-400 w-20 h-20 mb-2"
            />
            <span className="block text-center text-lg font-semibold mt-2">Lana Akash</span>
            <span className="block text-center text-sm text-gray-400 mb-2">@lanaakash</span>
            <span className="block text-center italic text-base text-gray-300">
              "ScrollX UI makes my projects look professional with minimal effort."
            </span>
          </div>
          <BorderGlideFooter></BorderGlideFooter>
        </BorderGlideContent>
      </BorderGlideCard>
    </BorderGlide>
  );
}
