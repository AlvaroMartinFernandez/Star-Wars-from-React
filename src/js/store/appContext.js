import { useContext,createContext,useMemo,useState } from "react";
import { getCharacters,getVehicles,getPlanets } from "../API/StarWars";
const [characters, setCharacters]=useState([]);
const [vehicles, setVehicles]=useState([]);
const [planets, setPlanets]=useState([]);

setCharacters(async ()=>{
	return await getCharacters();
});

setVehicles(async ()=>{
	return await getVehicles();
});
setPlanets(async ()=>{
	return await getPlanets();
});

const {dataCharacters, dataVehicles, dataPlanets} =useMemo(()=>{
	return{
		dataCharacters:characters,
		dataVehicles:vehicles,
		dataPlanets:planets
	}
})



const AppContext=createContext();

export const AppProvider= ({children })=>{
	return(
 <AppContext.Provider value ={null}>
	{children}
 </AppContext.Provider>

	);
}

const useAppContext = ()=> useContext(AppContext);
export default useAppContext;