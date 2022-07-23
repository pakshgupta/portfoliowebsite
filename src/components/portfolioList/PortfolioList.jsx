import "./portfolioList.scss"

export default function PortfolioList({id,title,active,setselected}) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"}
    onClick={()=>setselected(id)}>
        {title}
        </li>
  );
}
