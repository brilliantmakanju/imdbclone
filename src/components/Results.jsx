import Card from "./Card"
export default function Results({ results }){
	return (
	<div className="grid grid-cols-1 px-[5%] gap-5 md:grid-cols-2 md:gap-5 md:px-[10%] lg:grid-cols-3 lg:gap-5 items-center max-w-6xl mx-auto py-4 px-[20px] px-auto gap-5 w-[auto] " >
		{ results.map((datas) => {
    				return (
    					<Card key={datas.pk} result={datas} />
    				)
    			})}
	</div>
	)
}
