import React from 'react'
import "../style/highlight.css"
import h1 from '../img/h1.jpg'
import h2 from '../img/h2.jpg'
import h3 from '../img/h3.jpg'

const Highlight = () => {
  return (
    <div className='container' >

      <div className="cards">
        <div className="card">
        <div className="overcome">The first nationalistic revolutionary movement for Indian independence emerged from Bengal. It later took root in the newly formed Indian National Congress with prominent moderate leaders seeking the right to appear for Indian Civil Service examinations in British India, as well as more economic rights for natives. The first half of the 20th century saw a more radical approach towards self-rule by the Lal Bal Pal triumvirate, Aurobindo Ghosh and V. O. Chidambaram Pillai. </div>
          <img src={h1} alt="" />
          <div className="over">
            <h2> influential political leader</h2>
          </div>
        </div>
        <div className="card">
          <div className="overcome">The deputy prime minister of India (IAST: Bhārat Ke Upapradhānamantri) is the second-highest ranking minister of the Union in the executive branch of the Government of India and is a senior member of the Union Council of Ministers. The office holder also deputises for the prime minister in their absence.

The office has since been only intermittently occupied, having been occupied for a little more than 10 years out of the 75 years since its inception. Since 1947 India has had 7 deputy prime ministers, of which none having at least one full term. The first was Vallabhbhai Patel of the Indian National Congress party, who was sworn in on 15 August 1947, when India gained independence from the British Raj. Serving until his death in December 1950, Patel remains India's longest-serving deputy prime minister.</div>
           <img src={h2} alt="" />
           <div className="over">
            <h2> Deputy Prime Minister</h2>
            </div>
            </div>
        <div className="card"> 
        <div className="overcome">The Minister of Home Affairs (or simply, the Home Minister, short-form HM) is the head of the Ministry of Home Affairs of the Government of India. One of the senior-most officers in the Union Cabinet, the chief responsibility of the Home Minister is the maintenance of India's internal security; the country's large police force comes under its jurisdiction. Occasionally, they are assisted by the Minister of State of Home Affairs and the lower-ranked Deputy Minister of Home Affairs. </div>
        <img src={h3} alt="" />
        <div className="over">
          <h2>Home Minister of India </h2>
          </div>
          </div>
      </div>

    </div>
  )
}

export default Highlight
