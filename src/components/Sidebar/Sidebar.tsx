import { useAppContextHook } from "@hooks/useAppContextHook";
import SelectComponent from "@components/SelectComponents/SelectComponent";

function Sidebar() {
  const { selectCountry } = useAppContextHook();
  return (
    <div className="bg-slate-50 min-h-screen absolute top-0 left-0 bottom-0 w-[320px] px-[10px] py-[10px]">
      <div className="flex flex-col gap-[14px]">
        <div>
          <h1 className="text-[30px] text-orange-950">Sidebar block</h1>
        </div>
        <div>
          <SelectComponent />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
