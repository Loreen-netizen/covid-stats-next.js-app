import Head from "next/head";
import Table from "../components/TableLayout/TableLayout"
import {Grid} from "@material-ui/core"

export default function Home(data) {
  const covidData = data.data;
  console.log(covidData,"ccccccccccccoviddata")
  return (
    <>
      <Head>
        <title> Covid-Stats</title>
      </Head>
      <h1> Covid-19 Statistics</h1>
     
          <Table covidData={covidData}/>
      
    </>
  );
}

export const getStaticProps = async () =>{
  const response = await fetch(  "https://corona-stats.mobi/api/json.2.0.php?key=UTSiraH8NBz3JblhOcVI"
  );
const data = await response.json();


return{
  props: { 
    data
   }
}
};
