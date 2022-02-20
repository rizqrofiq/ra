import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import API from "../Services";

  const Menu = () => {
    const[nama,setnama]=useState("");
    const[deskripsi,setdeskripsi]=useState("");
    const[harga,setharga]=useState("");
    const[stok,setstok]=useState("");
    const[id,setid]=useState(0);
    const[data,setData]=useState([]);
    const[isUpdate,setisUpdate]=useState(false);

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        API.getMenu().then((res)=>{
            setData(res.data);
        });
    }

    function simpan(){
        if(!isUpdate){
            const formData = new FormData();
            formData.append("nama",nama);
            formData.append("deskripsi",deskripsi);
            formData.append("harga",harga);
            formData.append("stok",stok);
            API.postMenu(formData).then((res)=>{
                alert("Data Has Been Created");
                getData();
                setnama("");
                setdeskripsi("");
                setharga("");
                setstok("");
            });
        }else{
            const formData = new FormData();
            formData.append("nama",nama);
            formData.append("deskripsi",deskripsi);
            formData.append("harga",harga);
            formData.append("stok",stok);
            API.updateMenu(formData,id).then((res)=>{
                alert("Data Has Been Updated");
                setnama("");
                setdeskripsi("");
                setharga("");
                setstok("");
                getData();
            });
        }
    }

    
    async function up(data) {
        setnama(data.nama);
        setdeskripsi(data.deskripsi);
        setid(data.id);
        setharga(data.harga)
        setstok(data.stok);
        setisUpdate(true);
      }
    
      async function del(id) {
        if (window.confirm("Yakin ingin menghapus  ? ")) {
          API.deleteMenu(id).then((res) => {
            alert("Berhasil Di Hapus");
            getData();
          });
        } else {
          getData();
        }
      }

      return(
          <div>
              <Topbar/>
              <Sidebar/>
              
              <div className="col-10 p-2">
              <div className="container">
                  <div className="row">
                      <div className="col-md-5">
                          <div className="row mt-3">
                              <div className="card">
                                  <div className="card-header">
                                      <h3 className="card-title">Form Menu</h3>
                                  </div>
                                  <div className="card-body">
                                      <div className="form-group">
                                          <label htmlFor="nama"></label>
                                          <input type="text" className="form-control" name="nama" placeholder="input nama" required value={nama} onChange={(e)=>setnama(e.target.value)}></input>
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="deskripsi"></label>
                                          <input type="text" className="form-control" name="deskripsi" placeholder="input deskripsi" required  value={deskripsi} onChange={(e)=>setdeskripsi(e.target.value)}></input>
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="harga"></label>
                                          <input type="number" className="form-control" name="harga" placeholder="input harga" required value={harga} onChange={(e)=>setharga(e.target.value)}></input>
                                      </div>
                                      <div className="form-group">
                                          <label htmlFor="stok"></label>
                                          <input type="number" className="form-control" name="stok" placeholder="input stok" required value={stok} onChange={(e)=>setstok(e.target.value)}></input>
                                      </div>
                                      <div className="card-footer">
                                          <button className="btn btn-primary" type="submit" onClick={simpan}>Simpan</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                        <div className="col-md-5">
                            <div className="row">
                                <div className="table-responsive">
                                    <table className="table table-hover mt-2">
                                        <thead>
                                            <tr>
                                                <td>Id</td>
                                                <td>Nama</td>
                                                <td>Deskripsi</td>
                                                <td>Harga</td>
                                                <td>Stok</td>
                                                <td>Option</td>
                                                <td>Option</td>
                                            </tr>
                                        </thead>
                                        {data.map((item)=>(
                                            <tbody key={item.id.toString}>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.nama}</td>
                                                    <td>{item.deskripsi}</td>
                                                    <td>{item.harga}</td>
                                                    <td>{item.stok}</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={()=>del(item.id)}>Delete</button>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-success" onClick={()=>up(item)}>Edit</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                        </div>
                  </div>
              </div>
          </div>
      )
  }
  export default Menu;