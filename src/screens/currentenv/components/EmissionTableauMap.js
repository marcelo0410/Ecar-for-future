import Tableau from "tableau-react";

export default function EmissionTableauMap() {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };
  return(
      <div style={{paddingTop:"70px"}}>
        <Tableau
        url="https://prod-apnortheast-a.online.tableau.com/t/zshatest/views/test_map/1?:embed=y&:display_count=n&:showVizHome=n&:origin=viz_share_link"
        options={options}/>
      </div>
  )
}