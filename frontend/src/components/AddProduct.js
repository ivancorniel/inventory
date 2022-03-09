import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddProduct() {

    const [medicineTitle, setMedicineTitle] = useState('');
    const [description, setDescription] = useState('');
    const [medicineImage, setMedicineImage] = useState('');
    
    const navigate = useNavigate();

    const addToForm = async () => {

        let formfield = new FormData()

        formfield.append('title', medicineTitle)
        formfield.append('notes', description)
        formfield.append('picture', medicineImage)
        formfield.append('amount', 0)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/protuct_create',
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Token 0880921791d37beba9396630e87d07c3e0f19f0b',
            },
            data: formfield,
           
            
        }).then((response) => {
            navigate(-1)
          }, (error) => {

          });
                
    }

    return ( 
            <div className='container'>
                <h5>Agregar un medicamento</h5>
                <form encType='multipart/form-data' id='addproduct'>
                    <div className="mb-3">
                        <label className="form-label">Nombre del medicamento</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            aria-describedby="title"
                            placeholder='Introduce nombre del medicamentos'
                            name='title'
                            value={medicineTitle}
                            onChange={(e) => setMedicineTitle(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripci&oacute;n</label>
                        <textarea
                            className="form-control" 
                            name="medicineDescription" 
                            placeholder='Introduce una descripci&oacute;n'
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Foto </label><br/>
                        <input 
                            type="file" 
                            className="form-control" 
                            name='image'
                            src={medicineImage}
                            onChange={(e) => setMedicineImage(e.target.files[0])} 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={addToForm}>Submit</button>
                </form>
            </div>
        
    );
}

export default AddProduct;
