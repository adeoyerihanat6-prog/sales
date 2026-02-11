import React ,{useRef, useState} from 'react'

function Sales() {

    let [pricephone,setphone] = useState("")
    let [pricelaptop,setlaptop] = useState("")
    let [pricetablet,settablet] = useState("")

    let [costphone,setcp] = useState("")
    let [costlaptop,setcl] = useState("")
    let [costtablet,setct] = useState("")

    let myq = useRef()
    let mya = useRef()
    let myc = useRef()

    
    function myp1() {
        if (pricephone == "") {
            setphone(100000)
        }else {
            setphone("")
        }
    }
    function myp2() {
        if (pricelaptop == "") {
            setlaptop(700000)
        }else {
            setlaptop("")
        }
    }
    function myp3() {
        if (pricetablet == "") {
            settablet(300000)
        }else {
            settablet("")
        }
    }

    function forc1() {
        setcp(pricephone * myq.current.value)
    }
     function forc2() {
        setcl(pricelaptop * mya.current.value)
    }
     function forc3() {
        setct(pricetablet * myc.current.value)
    }

  let  total = costphone + costlaptop + costtablet
  return (
    <div className='h-screen w-screen bg-black grid place-items-center'>
        <table className='w-[80%]'>
            <thead>
            <tr>
                <th className='text-white border-2'>Items</th>
                <th className='text-white border-2'>Price</th>
                <th className='text-white border-2'>Quantity</th>
                <th className='text-white border-2'>Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='text-white border-2'><input type="checkbox" onClick={myp1}/>Phone</td>
                <td className='text-white border-2'><input type="number" value={pricephone}/></td>
                <td className='text-white border-2'><input type="number" onInput={forc1} ref={myq}/></td>
                <td className='text-white border-2'><input type="number" value={costphone}/></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td className='text-white border-2'><input type="checkbox" onClick={myp2}/>laptop</td>
                <td className='text-white border-2'><input type="number" value={pricelaptop}/></td>
                <td className='text-white border-2'><input type="number" onInput={forc2} ref={mya}/></td>
                <td className='text-white border-2'><input type="number" value={costlaptop}/></td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td className='text-white border-2'><input type="checkbox" onClick={myp3}/>Tablet</td>
                <td className='text-white border-2'><input type="number" value={pricetablet}/></td>
                <td className='text-white border-2'><input type="number" onInput={forc3} ref={myc}/></td>
                <td className='text-white border-2'><input type="number" value={costtablet}/></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className='border-2 text-white'>Total {total}</td>
            </tr>
        </tfoot>
        </table>
    </div>
  )
}

export default Sales