import React, {useEffect, useMemo} from "react";
import { Outlet } from "react-router-dom";
import {Footer} from "@shared/ui/footer";
import {cn, useAppDispatch, useAppSelector} from "@shared/lib";
import {selectShowInto, setShowIntro} from "@entities/user";
import {FullscreenIntro} from "@widgets/fullscreenIntro";


export const Layout: React.FC = () => {
  const dispatch = useAppDispatch()
  const showIntro = useAppSelector(selectShowInto)

  useEffect(() => {
    if (showIntro) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [showIntro]);

  const appWrapClasses = useMemo(
    () =>
      [
        "transition-opacity duration-300",
        showIntro ? "opacity-0" : "opacity-100",
      ].join(" "),
    [showIntro]
  );

  return (
    <>
      {showIntro && (
        <FullscreenIntro
          stayMs={1700}
          fadeMs={250}
          onDone={() => dispatch(setShowIntro(false))}
        />
      )}
      <div className={cn("w-full flex items-center justify-center flex-wrap", appWrapClasses)}>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
};
