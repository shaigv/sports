import React, { useState, useEffect } from 'react'
import Search from './Search'
import Header from './Header'
import Lists from './Lists'
import Page from './paging'
import api from '../api/axios'
import '../App.css'


const App = () => {
    const [loading, setLoading] = useState(true);
    const [list, setlist] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const [search, setSearch] = useState('');


    useEffect(() => {
        getAllPlayers();
    }, [page,search]);


    const getAllPlayers = async () => {
        const response = await api.get('/players',{
           params:{ "page":page, "per_page":12,"search":search}
        });
        setTotalPages(response.data.meta.total_pages)
        setlist(response.data.data);
        console.log(response.data.data)
        setLoading(false);

    };

    
    const onPageChange=(page)=>{
        setPage(page-1);
    }
    const handleSearch = (value) => {
        setPage(0)
        setSearch(value)
    }


    if (loading) {
        return null;
    }
    else {
        return (

            <div >
                <Header></Header>
                    <Search onValueChange={e => handleSearch(e)} />

               <br></br>

                <Lists initialList={list}></Lists>
                <Page totalPages={totalPages} onPageChange={onPageChange}></Page>
            </div>
        );
    }
}



export default App;