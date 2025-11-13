import React from 'react'
import { useState,useEffect, useRef } from 'react'
//import { useNavigate } from 'react-router-dom'
import './Newsapi.css'


////////////////////////////////////////////////
const NewsApi = () => {

    
    const [weatherData, setWeatherData]= useState({
        city:'',
        temp:'',
        condition:''
    })
    const[geoError, setGeoError]= useState('')
    const[checkWeather, setCheckWeather]= useState(false)

    // ----------------HeadLine News------------------------
    const[headLineNews, setHeadLineNews]= useState([])
    const[headLineNews2, setHeadLineNews2]= useState([])
    const[country1, setCountry1]= useState('us')
    const[country2, setCountry2]= useState('ng')
// ----------------------------------------------------------

    const[filteredNews, setFilteredNews]= useState([])

    // ----------------- Video Api----------------------------
    const[videoAPi, setVideoApi]= useState([])
    const[videoAPi2, setVideoApi2]= useState([])
    const[videoID, setVideoID]= useState(null)
// ----------------------------------------------------------

    const [isClicked, setClicked]= useState(false)
    const [isClicked2, setClicked2]= useState(false)
    const [isClicked4, setClicked4]= useState(false)
    const [isClicked5, setClicked5]= useState(false)
    const [isClickedOthers, setClickedOthers]= useState(false)
    const [isTrending, setTrending]= useState(false)
    const [isTrending2, setTrending2]= useState(false)
// ------------ Clock timer-----------------------
    const [clock, setClock]= useState(new Date())
    const [themes, setThemes]= useState(false)
// --------------------------------------------

// --------------------- Searched/Trending------------------
    const[searchResult, setSearchResult]= useState('worldnews')
    const[trendingNews, setTrendingNews]= useState(false)
    const scrollTrending=useRef(null)
    const scrollTrendingTag=useRef(null)
    
    const[Tnews1, setTnews1]= useState([])
    const[Tnews2, setTnews2]= useState([])
    const[Tnews3, setTnews3]= useState([])
    const[Tnews4, setTnews4]= useState([])


    // --------------------------------------------------------

// ---------------------- Indexes-----------------------------
    const[headLineIndex, setHeadlineIndex]=useState(0)
    const[trendingIndex1, setTrendingIndex1]=useState(0)
    
    const[currentIndex, setCurrentIndex]=useState(0)
    const[currentMusicIndex, setCurrentMusicIndex]=useState(0)


    const[currentOtherMusicIndex, setCurrentOtherMusicIndex]= useState(0)
    const[currentOtherMusicIndex2, setCurrentOtherMusicIndex2]= useState(0)

// ------------------------------------------------------------------------


// ------------------- Sports-----------------------------------------
    const[isPNewsClicked, setPNewsClicked]=useState(false)
    const[currentLeague, setCurrentLeague]= useState(false)

    const [sportsNews, setSportsNews]=useState([])
    const [sportsNews2, setSportsNews2]=useState([])
    const [sportsNews3, setSportsNews3]=useState([])
    const [sportsNews4, setSportsNews4]=useState([])

    const [sportsResult, setSportsResult]=useState('sports')
    
    const [PremierLeagueNews, setPremierLeagueNews]=useState(false)
    const [LaligaLeagueNews, setLaligaLeagueNews]=useState(false)
    
    const scrollSports=useRef(null)
    const scrollLaligaSports=useRef(null)

    const [SeriaLeagueNews, setSeriaLeagueNews]=useState(false)
    const scrollSeriaSports=useRef(null)

    const scrollGermanSports=useRef(null)
    const [germanyLeagueNews, setgermanyLeagueNews]=useState(false)

    const scrollFranceSports=useRef(null)
    const [franceLeagueNews, setFranceLeagueNews]=useState(false)


    const [leagueTable2, setLeagueTable]= useState([])
    const [leagueTableYear, setLeagueTableYear]= useState([])


    const [isLeagueClicked, setLeagueClick]= useState(false)
    const [countId, setCountId]= useState(null)
    const [leagId, setLeagId]= useState(null)
// -------------------------------------------------------------


// --------------------Music News-------------------------
    const[musicNews,setmusicNews]=useState([])

    const musicRef=useRef()
    const[naija, setNaija]=useState(`gb,de`)

    const[naijaMusicNews, isNaijaMusicNews]=useState(false)
    const[foreignMusicNews, isForeignMusicNews]=useState(false)

    const [otherMusicNews, setOtherMusicNews]= useState([])
    const [otherMusicNews2, setOtherMusicNews2]= useState([])
    // ------------------------------------------------------------------



    useEffect(()=>{

       const interval= setInterval(() => {
            setClock(new Date())
        }, 1000);

        return(()=>clearInterval(interval))
    },[]);

    function clickNaijaNews(){
        setNaija('ng')
        isNaijaMusicNews(true)
        isForeignMusicNews(false)
        setTimeout(() => {
            musicRef.current?.scrollIntoView({behavior:'smooth'}) 
        }, 200);
    }
    
    function clickForeignNews(){
        setNaija('us')
        isForeignMusicNews(true)
        isNaijaMusicNews(false)
        setTimeout(() => {
            musicRef.current?.scrollIntoView({behavior:'smooth'}) 
        }, 200);
    }


// -----------------------For timers------------------------

useEffect(()=>{
    const interval =setInterval(() => {
        setHeadlineIndex((preText)=>{
            const nextIndex= (preText+1)%headLineNews.length;
            return nextIndex;
        })

        
    }, 30000);

    return(()=>clearInterval(interval))

},[headLineNews])


useEffect(()=>{
    const interval =setInterval(() => {
        setCurrentIndex((preText)=>{
            const nextIndex= (preText+1)%sportsNews3.length;
            return nextIndex;
        })

        
    }, 30000);

    return(()=>clearInterval(interval))

},[sportsNews3])


useEffect(()=>{
    const interval =setInterval(() => {
        setCurrentMusicIndex((preText)=>{
            const nextIndex= (preText+1)%musicNews.length;
            return nextIndex;
        })

        
    }, 10000);

    return(()=>clearInterval(interval))

},[musicNews])


useEffect(()=>{
    const interval =setInterval(() => {
        setCurrentOtherMusicIndex((preText)=>{
            const nextIndex= (preText+1)%otherMusicNews.length;
            return nextIndex;
        })

        
    }, 9000);

    return(()=>clearInterval(interval))

},[otherMusicNews])


useEffect(()=>{
    const interval =setInterval(() => {
        setCurrentOtherMusicIndex2((preText)=>{
            const nextIndex= (preText+1)%otherMusicNews2.length;
            return nextIndex;
        })

        
    }, 7000);

    return(()=>clearInterval(interval))

},[otherMusicNews2])

 
// Reset trending index when filteredNews changes
  useEffect(() => {
    setTrendingIndex1(0);
  }, [filteredNews]);

  // Interval to update trendingIndex1 every 10 seconds, only if filteredNews has items
  useEffect(() => {
    if (filteredNews.length === 0) return;

    const interval = setInterval(() => {
      setTrendingIndex1((prevIndex) => (prevIndex + 1) % filteredNews.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [filteredNews]);


//-----------------------------------------------------------------------------------//




function handleClickFtn(){
        setSearchResult('global')
        setTrendingNews(true)

        setTimeout(() => {
            scrollTrending.current?.scrollIntoView({behavior:'smooth'})
        }, 100);
}

function handleEnglandSportsFtn(){
        setSportsResult('premier league')
        setPremierLeagueNews(true)
        setLaligaLeagueNews(false)
        setSeriaLeagueNews(false)
        setgermanyLeagueNews(false)
        setFranceLeagueNews(false)
        setCurrentLeague(true)

        setCountId(44)
        setLeagId(152)


        setTimeout(() => {
            scrollSports.current?.scrollIntoView({behavior:'smooth'})
        }, 100);
}   

function handleItalySportsFtn(){
        setSportsResult('italian league')
        setPremierLeagueNews(false)
        setLaligaLeagueNews(false)
        setSeriaLeagueNews(true)
        setCurrentLeague(true)
        setgermanyLeagueNews(false)
        setFranceLeagueNews(false)
        setCountId(5)
        setLeagId(207)


        setTimeout(() => {
            scrollSeriaSports.current?.scrollIntoView({behavior:'smooth'})
        }, 100);
}

function handleGermanySportsFtn(){
        setSportsResult('Germany')
        setPremierLeagueNews(false)
        setLaligaLeagueNews(false)
        setFranceLeagueNews(false)
        setSeriaLeagueNews(false)
        setgermanyLeagueNews(true)

        setCurrentLeague(true)

        setCountId(4)
        setLeagId(175)


        setTimeout(() => {
            scrollGermanSports.current?.scrollIntoView({behavior:'smooth'})
        }, 100);
}

function handleSpainSportsFtn(){
        setSportsResult('laliga')
        setLaligaLeagueNews(true)
        setFranceLeagueNews(false)
        setPremierLeagueNews(false)
        setSeriaLeagueNews(false)
        setgermanyLeagueNews(false)

        setCurrentLeague(true)
        
        setCountId(6)
        setLeagId(302)
        
        setTimeout(() => {
            scrollLaligaSports.current?.scrollIntoView({behavior:'smooth'})
        }, 100);
}

function handleFranceSportsFtn(){
        setSportsResult('Ligue 1')
        setFranceLeagueNews(true)
        setLaligaLeagueNews(false)
        setPremierLeagueNews(false)
        setSeriaLeagueNews(false)
        setgermanyLeagueNews(false)

        setCurrentLeague(true)
        
        setCountId(3)
        setLeagId(168)
        
        setTimeout(() => {
            scrollFranceSports.current?.scrollIntoView({behavior:'smooth'})
        }, 100);
}



function appear(){
    setClicked(!isClicked)
}

function trending(){
    setClicked2(!isClicked2)
}

function football(){
    setClicked4(!isClicked4)
}
function music(){
    setClicked5(!isClicked5)
}
function others(){
    setClickedOthers(!isClickedOthers)
}


//-------------------DarkMode Start---------------------------------- 
function darkMode(){
    setThemes(!themes)
}

const titleBarChange={
    backgroundColor:'brown',
    backgroundImage:'none'
    
}

const themesColor={
    backgroundColor:'brown',
}

const rightFiles={
    backgroundColor:'#d4d4d4',
}
//-------------------DarkMode End ---------------------------------- 

// ----------------For the search bar---------------------------

const inputRef= useRef()

const[searchBarResult, setSearchBarResult]=useState('')

function iconRef(){
    //inputRef.current.focus()
    setSearchResult(searchBarResult)

    setTimeout(() => {
        scrollTrending.current.scrollIntoView({behavior:'smooth'})
    }, 1000);
}

function fetchNews(e){
    const text=e.target.value
    // console.log(text)

    if(text.trim()===''){
        setSearchBarResult('')
        return;
    }
    setSearchBarResult(text.trim())

}

function handleEnterKey(e){

    if(e==='Enter'){
        const inputText=inputRef.current.value.trim()

        if(inputText!==''){
            setSearchResult(inputText)

            // setTimeout(() => {
            //     scrollTrending.current.scrollIntoView({behavior:'smooth'})
            // }, 1000);
        }
    }

    
}

// -------------------------League Function----------------------------------------------

function LeagueTableBtn(){
    setLeagueClick(!isLeagueClicked)
}



// -------------------------ALL API's CALL------------------------------------------------
            // --------------For weather---------------------
const apiKeyWeather= '0a60008fc7698760688ffc4c5a9312d7'

useEffect(()=>{
        const fetchData= async (lat,lon)=> {

            try {
                const data= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeyWeather}&units=metric`)
                const response= await data.json()
                setWeatherData({
                    city:response.name,
                    temp:response.main.temp,
                    condition:response.weather[0].description,
                    icon:response.weather[0].icon

                })
                setCheckWeather(true)
            } catch (error) {
                console.error(`Error in fetching weather: ${error}`)
                setCheckWeather(false)
                
            }
        }

        if(navigator.geolocation){
            
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    const{latitude, longitude}= position.coords
                        fetchData(latitude,longitude);
                }
            ,
            (error)=>{
                setGeoError(`Geolocation error ${error}`)
                setCheckWeather(false)
                console.error(`Geolocation error:${error}`)

            }
        )
        } else{
            setGeoError(`Geolocation not supported by this browser:`)
            setCheckWeather(false)
            console.error(geoError)
        }
}, [geoError])


// -----------------------------------For Headline news----------------------------------------

const apiKey= '1111682312254bbb8af51413518f8958'
const apiKey2= 'pub_850929f565bd33dfcab58e5a151a2463b2e41'
useEffect(()=>{
    const fetchHeadLineNewsData=async (country1,country2) => {
        try {

            const response= await fetch(`https://newsapi.org/v2/top-headlines?country=${country1}&pageSize=9&apiKey=${apiKey}`)
            const responseNewsData= await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey2}&language=en&country=${country2}`)
            
            const data= await response.json()
            const dataNewsData= await responseNewsData.json()
            
    
            if(response.ok && responseNewsData){
                const sliced=dataNewsData.results.slice(0,10)
                setHeadLineNews(data.articles)
                //setHeadLineNews2(dataNewsData.results)
                setHeadLineNews2(sliced)
                
    
            }else{
                console.error('Api error:', data.message)
                
            }
            
        } catch (error) {
            console.error('Failed to fetch')
            setHeadLineNews([])
            setHeadLineNews2([])
            
        }
    
    }
    
    fetchHeadLineNewsData(country1,country2)
},[country1,country2])

//----------------- For Changing Things----------------------------------------------------------------------------------------
        //----------------Trending News /(Searched News) ------------------------------------------------------------------------//

const apiKeyTrending = '45230e0affb549aeb026732b5c948f18';

useEffect(() => {
  // Only fetch if searchResult is valid
  if (!searchResult || searchResult.trim() === '') {
    setFilteredNews([]); // clear news if no search term
    return;
  }

  const fetchTrendingData = async (value) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${value}&pageSize=20&language=en&apiKey=${apiKeyTrending}`
      );
      const data = await response.json();

      if (response.ok && data.articles && Array.isArray(data.articles)) {
        const safeArticles = data.articles.filter(
          (article) => article.title && article.url && article.urlToImage
        );
        setFilteredNews(safeArticles.length > 0 ? safeArticles : []);
      } else {
        console.error('API error or no articles:', data.message || 'Unknown error');
        setFilteredNews([]);
      }
    } catch (error) {
      console.error(`Failed to fetch API: ${error}`);
      setFilteredNews([]);
    }
  };

  fetchTrendingData(searchResult);
}, [searchResult]);

// -------------------TNews Api Call------------------------
//const apiKeyTnews='4ce5c2b0dbcc3cb08b01b70bdccadb63'
        const apiKeyTnews2='4ce5c2b0dbcc3cb08b01b70bdccadb63'
        const apiKeyTnews3='0fc65fa5bbe3a203fda73e6c286208cf'
        const apiKeyTnews1='cf143ab48c4f5082106c4ac75789b6c1'
useEffect(()=>{

    const fetchData= async () => {
        try {
            const responseTnews1= await fetch(`https://gnews.io/api/v4/search?q=Israel+AND+iran+AND+war&lang=en&apikey=${apiKeyTnews1}`)
           const responseTnews2= await fetch(`https://gnews.io/api/v4/search?q=russia+AND+ukraine+AND+war&lang=en&apikey=${apiKeyTnews1}`)
           const responseTnews3= await fetch(`https://gnews.io/api/v4/search?q=Israel+AND+gaza+AND+war&lang=en&apikey=${apiKeyTnews3}`)
           const responseTnews4= await fetch(`https://gnews.io/api/v4/search?q=war&lang=en&apikey=${apiKeyTnews2}`)

            const dataTnews1= await responseTnews1.json()
            const dataTnews2= await responseTnews2.json()
            const dataTnews3= await responseTnews3.json()
            const dataTnews4= await responseTnews4.json()

            if(responseTnews1.ok){
                const slicePart1= dataTnews1.articles.slice(0,5)
                const slicePart2= dataTnews2.articles.slice(0,5)
                const slicePart3= dataTnews3.articles.slice(0,5)
                const slicePart4= dataTnews4.articles.slice(0,5)
                setTnews1(slicePart1)
                setTnews2(slicePart2)
                setTnews3(slicePart3)
                setTnews4(slicePart4)

            }else{
                console.error(`Api error`)
                setTnews1([])
                setTnews2([])
                setTnews3([])
                setTnews4([])
            }
        } catch (error) {
            console.error(`Failed to fetch Api ${error}`)
            setTnews1([])
            setTnews2([])
            setTnews3([])
            setTnews4([])
        }
    }
    fetchData()
    }
    
    ,[])



//old key a974e9645e2324f0b65058cfabb48454
//3cecff0b46a693d5e420e8325b161291
//------------------------------------For sports-------------------------------------
const apiKey34='a974e9645e2324f0b65058cfabb48454';
const apiKey4='3cecff0b46a693d5e420e8325b161291';
const apiKeyNewsData='pub_80caddad9eac400e9c9f2108212f3cd3';
useEffect(()=>{
    const fetchSportsData= async (value) => {
        try {
            const response= await fetch(`https://newsapi.org/v2/everything?q=${value}&pageSize=10&language=en&apiKey=${apiKey}`)
            const responseNewsData= await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKeyNewsData}&language=en&category=sports`)
            const responseGNews= await fetch(`https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=gb&apikey=${apiKey34}`)
            const responseGNewsSearch= await fetch(`https://gnews.io/api/v4/search?q=${value}&lang=en&apikey=${apiKey4}`)
            
        

            const data= await response.json()
            const dataNewsData= await responseNewsData.json()
            const dataGNews= await responseGNews.json()
            const dataGNewsSearch= await responseGNewsSearch.json()
            

            if(response.ok && responseNewsData&&responseGNews&&responseGNewsSearch){
                setSportsNews(data.articles)
                
                const sliced=dataNewsData.results.slice(0,10)
                setSportsNews2(sliced)

                setSportsNews3(dataGNews.articles)
                setSportsNews4(dataGNewsSearch.articles)
    
            }else{
                console.error('Api error:', response.message)
                setSportsNews([])
                setSportsNews2([])
                setSportsNews3([])
                setSportsNews4([])
            }

        } catch (error) {
            console.error(`Failed to fetch api: ${error}`)
            setSportsNews([])
            setSportsNews2([])
            setSportsNews3([])
            setSportsNews4([])
        }
    }

    fetchSportsData(sportsResult)


},[sportsResult])


// ---------------------------------------Music Data----------------------------------------------------------------
useEffect(()=>{
    const fetchMusicNewsData= async (value) => {
        try {
            const responseNewsData= await fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey2}&language=en&qInTitle=music&country=${value}`)
            
            const dataNewsData= await responseNewsData.json()
            

            if(responseNewsData.ok){
                setmusicNews(dataNewsData?.results)  

            }else{
                console.error('Api error:', responseNewsData.message)
                setmusicNews([])    
            }

        } catch (error) {
            console.error(`Failed to fetch api: ${error}`)
            setmusicNews([])
        }
    }

    fetchMusicNewsData(naija)


},[naija])



const apiNewsApi='336c9c1429594eefa73fd2d5675cf99f'
//apiKey4
            //---------------Other musical news-----------------------//
useEffect(()=>{
    const fetchOtherMusicNewsData= async () => {
        try {
            const responseNewsData= await fetch(`https://newsapi.org/v2/everything?q=music&language=en&apiKey=${apiNewsApi}`)
            const responseNewsData2= await fetch(`https://gnews.io/api/v4/search?q=music&lang=en&country=us&apikey=${apiKey4}`)

        
            const dataNewsData= await responseNewsData.json()
            const dataNewsData2= await responseNewsData2.json()


            console.log(dataNewsData)
            console.log(dataNewsData2)
            if(responseNewsData.ok&&responseNewsData2.ok){
                setOtherMusicNews(dataNewsData?.articles||[])  
                setOtherMusicNews2(dataNewsData2?.articles||[])  

            }else{
                console.error('Api error:', responseNewsData.message)
                setOtherMusicNews([])    
                setOtherMusicNews2([])    
            }

        } catch (error) {
            console.error(`Failed to fetch api: ${error}`)
            setOtherMusicNews([])
            setOtherMusicNews2([])
        }
    }

    fetchOtherMusicNewsData()


},[])




                // ----------------------------Youtube Api-----------------------------------------
//https://www.searchapi.io/api/v1/search?api_key=uAUhAqBU6Bi2Lc8hdmhDEuBX&engine=youtube_trends&q=trending videos
//https://www.googleapis.com/youtube/v3/videos
//https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=10&key=${apiKey}


const apiVideoKeyGoogle='AIzaSyDezO9g3duBXEkJ9Py7cZQgO7qX_rQQ2QM'
const apiVideoKey= 'Qf8A2D6q8uMCWqmvamYb1g7o'

useEffect(()=>{        
            //const fetchVideoData= async (value) => {
            const fetchVideoData= async () => {
            try {
            
                //const response= await fetch(`https://www.searchapi.io/api/v1/search?api_key=${apiVideoKey}&engine=youtube_trends&q=${value}`)
                const response= await fetch(`https://www.searchapi.io/api/v1/search?api_key=${apiVideoKey}&engine=youtube_trends&q=trending videos`)
                const response2= await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=1&key=${apiVideoKeyGoogle}`)
                
                const data= await response.json()
                //const data2= await response2.json()

            if(response.ok){
                const slicedPart= data.trending.slice(0,10)
                setVideoApi(slicedPart)
                //setVideoApi(data)
                //setVideoApi2(data)
            }
            else{
                console.log(`Api error`, response.message)
                setVideoApi([])
                //setVideoApi2([])
                
            }

            } catch (error) {
                console.error(`Failed to fetch api ${error}`)                
                setVideoApi([])
                //setVideoApi2([])
            }
            

        }

        //fetchVideoData('trending videos')
        fetchVideoData()

}, [])


    // --------------------------------------------For searchApi--------------------------------------------------
function videoPlay(link){
    const videoId= link.split('v=')[1].split('&')[0]
    setVideoID(videoId)
}

useEffect(()=>{
    if (videoAPi.length>0){

        const defaultLink=videoAPi[0].link;
        const defaultVideoPlayed=defaultLink.split('v=')[1].split('&')[0]
        setVideoID (defaultVideoPlayed)
    }
    
},[videoAPi])


// ----------------------For various leagues-------------------------------------
//const newApi='cd70b32e5007c192cabd9ba482474bc9c22f350631029c92336f9c3c8867ec65'
const newApi='aed658ffcb83b8b1f8f0e82eac7c5645063fa986268cfdb3cf90c9c003cd4440'
useEffect(()=>{
    const fetchData= async (countryId,leagueId) => {
//league_id=152 country_id=44
        try {

            const response= await fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}&APIkey=${newApi}`)
            const response2= await fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${countryId}&APIkey=${newApi}`)
            const data= await response.json()
            const data2= await response2.json()

        
            // console.log(data2)

            if(response.ok){
                setLeagueTable(data)
                setLeagueTableYear(data2)
            }else{
                console.error(`api error ${response.message}`)
                setLeagueTable([])
                setLeagueTableYear([])
            }
        }

        catch (error) {
            console.error(`Failed to fetch API :${error}`)
            setLeagueTable([])
            setLeagueTableYear([])
        }    
}
    fetchData(countId,leagId)
},[countId,leagId])

    return (<>
    
    <div className='container---1'> 
        
        <nav>
            <ul className={`ul-title`} style={themes? titleBarChange:null}>   
                <li className='Icon'>
                    <span className='app-name'>Credible</span>
                    
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth="1.5"
                            stroke="currentColor" 
                            className="mark">
                            <path strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="m4.5 12.75 6 6 9-13.5" 
                            />
                        </svg>

                    
                </li>

                <li className='other-part'>
                    <a href='#'><span className={`${themes?'home-part-themes':'home-part'}`}>Home</span></a>
                    <a href='#Menu'><span className={`${themes? 'menu-part-themes':'menu-part'}`}>Menu</span></a>
                    <span className='searchBar'>
                        <input type='text' ref={inputRef} placeholder='Enter news type' className='search-bar-title' onChange={fetchNews} onKeyDown={handleEnterKey}/>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                            stroke="currentColor" className="search-icon" onClick={iconRef} 
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" 
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                            />
                        </svg>

                    </span>
                </li>
                
            </ul>
        </nav>
        
        
        <div className='files'>
            <section className='left-files' style={themes?themesColor:null}>
                <h1 className='left--title ul--' id='Menu' onClick={()=>{setCountry1('us'); setCountry2('is,ng,gb')}}>Menu</h1>

                <br></br>

                <h2 className={`ul-- searchedLinks`} onClick={trending}>🔥Trending Now
                
                        {isClicked2? 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                    className="appearIcon">
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                className="appearIcon">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                                              

                            }
                </h2>
                    <ul className={`ul-others ${isClicked2? 'show':''}`}>
                        <li className='ul-- searchedLinks li' onClick={handleClickFtn}>🌍 World News</li>
                            <li>
                                <span className='ul-- searchedLinks li' 
                                    onClick={()=>{setTrending(!isTrending) 
                                    setTrending2(!isTrending2)
                                    
                                    setTimeout(() => {
                                    scrollTrendingTag.current?.scrollIntoView({behavior:'smooth'})
                                    }, 100);
                                    }}>
                        
                                    📈 What's Trending 
                                    {isTrending? 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                                className="appearIcon">
                                                <path strokeLinecap="round" strokeLinejoin="round" 
                                                d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                            className="appearIcon">
                                            <path strokeLinecap="round" strokeLinejoin="round" 
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                              
                                    }
                                </span> 
                            
                            <ul className={`ul-others ${isTrending?'show':''}`}>
                                <li className='ul--'><a href='#IsrealHamas' className='a-trends'>#IsrealHamas</a></li>
                                <li className='ul--'><a href='#IsrealIran' className='a-trends'>#IsrealIran</a></li>
                                <li className='ul--' ><a href='#RussiaUkraine' className='a-trends'>#RussiaUkraine</a></li>
                                <li className='ul--'><a href='#Global' className='a-trends'>#Global</a></li>
                            </ul>
                        </li>

                    </ul>
                
                    <br></br>

                <h2 className='ul--'>Sports</h2>
                <ul>
                    <li>
                        <span className='li ul--' onClick={football}>
                            Football

                            {isClicked4? 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                    className="appearIcon">
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                className="appearIcon">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                                              

                            }
                            

                        </span>
                        
                        <ul className={`ul-others ${isClicked4?'show':''}`}>
                            <li className='ul--'>Champions league</li>
                            <li className='ul-- searchedLinks' onClick={handleEnglandSportsFtn}>England</li>
                            <li className='ul-- searchedLinks' onClick={handleSpainSportsFtn}>Spain (Laliga)</li>
                            <li className='ul-- searchedLinks' onClick={handleItalySportsFtn}>Italy (Seria A)</li>
                            <li className='ul-- searchedLinks' onClick={handleGermanySportsFtn}>Germany (Bundesliga)</li>
                            <li className='ul-- searchedLinks'onClick={handleFranceSportsFtn}>France (Ligue 1)</li>
                        </ul>
                    </li>

                    <li className='li-others'> 
                        <span className='li ul-- searchedLinks' onClick={others}>Others </span>
                        <ul className={`ul-others ${isClickedOthers?'show':''}`}>
                            <li className='ul--'>Basketball</li>
                            <li className='ul--'>Volleyball</li>
                            <li className='ul--'>Table tennis</li>
                            <li className='ul--'>Hockey</li>
                        </ul>
                    </li>
                </ul>

                <br></br>
                <h2 onClick={music} className='music ul--'>
                    Music News
                            {isClicked5? 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                    className="appearIcon">
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                className="appearIcon">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            }
                        
                </h2>
                    <ul className={`ul-others ${isClicked5?'show':''}`}>
                        {/* <li className='ul--'>America Music</li> */}
                        <li className='ul-- searchedLinks' onClick={clickNaijaNews}>Naija</li>
                        <li className='ul-- searchedLinks' onClick={clickForeignNews}>Foreign</li>

                    </ul>
                
                <br></br>
                <h2 className='ul--'>Global Health News</h2>
                    <ul>
                    <li> <span className='li ul--'>Disease Outbreaks </span>
                        <ul className='all'>
                        <li className='ul--'>COVID-19 Updates</li>
                        <li className='ul--'>Ebola & Emerging Viruses</li>
                        <li className='ul--'>WHO Emergency Alerts</li>
                        </ul>
                    </li>
                    <li><span className='li ul--'>Vaccination & Immunization</span>
                        <ul className='all'>
                        <li className='ul--'>Global Rollouts</li>
                        <li className='ul--'>New Vaccines (e.g., Malaria)</li>
                        <li className='ul--'>Booster Shot Guidelines</li>
                        </ul>
                    </li>
                    <li><span className='li ul--'>Climate & Health</span>
                        <ul className='all'>
                        <li className='ul--'>Heatwave & Pollution Alerts</li>
                        <li className='ul--'>Impact on Respiratory Diseases</li>
                        </ul>
                    </li>
                    <li><span className='li ul--'>Mental Health</span>
                        <ul className='all'>
                        <li className='ul--'>Global Awareness Campaigns</li>
                        <li className='ul--'>Stress and Burnout</li>
                        <li className='ul--'>Youth Mental Health</li>
                        </ul>
                    </li>
                    <li><span className='li ul--'>Nutrition & Lifestyle</span>
                        <ul className='all'>
                        <li className='ul--'>Obesity Trends</li>
                        <li className='ul--'>Healthy Eating Tips</li>
                        <li className='ul--'>Malnutrition Hotspots</li>
                        </ul>
                    </li> 
                    <li><span className='li ul--'>Medical Breakthroughs</span>
                        <ul className='all'>
                        <li className='ul--'>Cancer & HIV Treatment Advances</li>
                        <li className='ul--'>AI in Healthcare</li>
                        <li className='ul--'>Gene Editing Updates</li>
                        </ul>
                    </li>
                    <li><span className='li ul--'>Global Health Policy</span>
                        <ul className='all'>
                        <li className='ul--'>Universal Health Care Initiatives</li>
                        <li className='ul--'>WHO/UNICEF Reports</li>
                        </ul>
                    </li>
                    <li><span className='li ul--'>Health Inequality</span>
                        <ul className='all'>
                        <li className='ul--'>Access to Water & Sanitation</li>
                        <li className='ul--'>Women & Children's Health</li>
                        <li className='ul--'>Disparities in Rural Areas</li>
                        </ul>
                    </li>
                    </ul>

                    <br></br>

                    
                    <br></br>

                <h2 className='ul--'>⭐ Bookmarked</h2>
                        <ul className='bookMark'>
                            <li className='ul--'>Premier League Highlights</li>
                            <li className='ul--'>Elon Musk Interview</li>
                        </ul>

                    <br></br>

            {/* ------Region------- */}

                <h2 className='region ul--'>🌍 Region</h2>
                <select className='select-bar'>
                    <option value="us">United States</option>
                    <option value="ng">Nigeria</option>
                    <option value="fr">France</option>
                    <option value="gb">United Kingdom</option>
                    <option value="de">Germany</option>
                </select>

                <br></br>
                <br></br>

                <div className='weather'>
                    {checkWeather?<img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} className='img-weather' alt='Weather-Picture'/>:<h2>☀️</h2>}
                    <h2>Weather</h2>
                </div>
                <p className='weather-left'>
                {checkWeather?`${weatherData.city}: ${weatherData.temp} ℃, ${weatherData.condition}`:`Lagos: 30°C, Cloudy` }
                    {/* {`${weatherData.city}: ${weatherData.temp} ℃, ${weatherData.condition}`} */}
                    {/* Lagos: 30°C, Cloudy */}
                </p>

                <br></br>

                <h2 className='connect'>📢 Connect</h2>
                <ul className='connect-link'>
                    <li className='ul--'><ion-icon className='ion-icon twitter' name="logo-twitter"></ion-icon><a href='#'  className='social-links' rel="noreferrer">Twitter</a></li>
                    <li className='ul--'><ion-icon className='ion-icon youtube' name="logo-youtube"></ion-icon><a href='#'  className='social-links' rel="noreferrer">YouTube</a></li>
                    <li className='ul--'><ion-icon className='ion-icon facebook' name="logo-facebook"></ion-icon><a href='#'  className='social-links' rel="noreferrer">Facebook</a></li>
                </ul>

                <br></br>

                <h2 className='appearance ul--' onClick={appear}>
                
                    🌓 Appearance

                    {isClicked?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                    className="appearIcon">
                                    <path strokeLinecap="round" strokeLinejoin="round" 
                                    d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                className="appearIcon">
                                <path strokeLinecap="round" strokeLinejoin="round" 
                                d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                    }
                    
                </h2>
                {isClicked? <label>
                    <input type="checkbox" className='input-key' onChange={darkMode} />
                    <span className='dark-mode'>Dark Mode</span>
                </label> : <></> }

                <h3 className='copyright'>(c) Copyright {new Date().getFullYear()} {clock.toLocaleTimeString()}</h3>
                
            </section>

        {/*---------------------------------------------Right Lanes-----------------------------------------------------------  */}
    <section className='right-files' style={themes? rightFiles:null}>
            {headLineNews.length > 0 && headLineNews2.length > 0 ? (<h2 className='section-title'>📰 Top Headlines</h2>):(<></>)}
        
                
            {headLineNews.length>0 && headLineNews2.length>0 ?

            (   
            <div>
                <div className='headline-page'>
                    <div className='headLine--1'>
                        <img src={headLineNews[headLineIndex]?.urlToImage || headLineNews[0].urlToImage } alt='headLine pictures' className='headLine-pix' />
                    </div>

                    <div className='headLine-txt'>
                        
                        <a href={headLineNews[headLineIndex]?.url} target='_blank' rel='noreferrer' className='news-tit align'>
                            <h3>{headLineNews[headLineIndex]?.title.toUpperCase()}</h3>
                        </a>
                        
                        <p className='news--des'>{headLineNews[headLineIndex]?.description}</p>
                        
                    </div>

                </div>

                    <div>
                        <p className='h-news-text'>More HeadlineNews {`>>`}</p>
                        

                        <div className='heading-grid--1'>
                            {headLineNews2.map((article, index)=>(

                            <div key={index}>

                                {article.image_url && (
                                    <img src={article.image_url} alt='news' className='headline--2-img' />
                                )}
                                
                                <div className='news-content'>
                                <a href={article.link} target='_blank' rel='noreferrer' className='heading--title'><h3>{article.title}</h3> </a>
                                </div>
                            </div>

                            ))}
                            
                        </div>

                    </div>

            </div>

            

                

            )   :   (
                        <div className='no-results'>
                            <div className='inner-no-results'>
                                <p className='no-results-text'>No News yet...</p>
                                <p className='no-results-sticker'>🥹</p>
                            </div>
                    
                        </div>
                    )
            }        
            

                    
        {/* //{filteredNews.length>0 ? ( */}
         {Array.isArray(filteredNews) && filteredNews.length > 0 && filteredNews[trendingIndex1] ? (
        <>
            <div ref={scrollTrending}></div>
                <h2 className="section-title st-1 T-news down">
                    🔍 Search Results {trendingNews ? <span>Trending News</span> : null}
                </h2>

            <div className="hd-1 trending-part">
                    <div className="trending-img">
                        <img
                            src={filteredNews[trendingIndex1]?.urlToImage || '/fallback-image.png'}
                            alt={filteredNews[trendingIndex1]?.title || 'Trending news image'}
                            className="img-news"
                        />
                    </div>

                    <div className="trending-txt">
                        <h3 className="ft-title">
                            {filteredNews[trendingIndex1]?.title || 'No Title Available'}
                        </h3>
                        <p className="ft-content">
                            {filteredNews[trendingIndex1]?.description || 'No Description Available'}
                        </p>

                        <div className="timeDate">
                            <a
                                href={filteredNews[trendingIndex1]?.url || '#'}
                                target="_blank"
                                rel="noreferrer"
                                className="Read-more"
                            >
                                Read more
                            </a>
                            
                            <p>|</p>
                        
                            <p className='trending-date'>
                                {filteredNews[trendingIndex1]?.publishedAt
                                ? new Date(filteredNews[trendingIndex1].publishedAt).toLocaleDateString()
                                : 'Unknown date'}
                            </p>
                        </div>
                    </div>

            </div>
                    
        
            {isTrending2? 
                <div ref={scrollTrendingTag}>
                        <p className='trends--text'>
                        🔥More Trending News {`>>`}  
                        </p>
                        
                    <div className='trends-items'>
                        <div className='tagged'>
                            <p className='tags' id='IsrealIran'>#IsrealIran</p>
                           {Tnews1.map((data, index)=>(
                            <div key={index}> 
                                <img src={data.image} alt='Various News Gallery' className='tnews-img'/>
                                <p className='tnews-ptext'><a href={data.url} className='tnews-link'>{data.title}</a></p>
                            </div>
                           ))} 
                        </div>
                            
                        <div className='tagged'>
                           <p className='tags' id='RussiaUkraine'>#RussiaUkraine</p>
                            {Tnews2.map((data, index)=>(
                            <div key={index}> 
                                <img src={data.image} alt='Various News Gallery' className='tnews-img'/>
                                <p className='tnews-ptext'><a href={data.url} className='tnews-link'>{data.title}</a></p>
                            </div>
                           ))}
                        </div>
                        
                        <div className='tagged'>
                            <p className='tags' id='IsrealHamas'>#IsrealHamas</p>
                            {Tnews3.map((data, index)=>(
                            <div key={index}> 
                                <img src={data.image} alt='Various News Gallery' className='tnews-img'/>
                                <p className='tnews-ptext'><a href={data.url} className='tnews-link'>{data.title}</a></p>
                            </div>
                           ))}
                        </div>
                        
                        <div className='taggs'>
                           <p className='tags' id='Global'>#Global</p>
                            {Tnews4.map((data, index)=>(
                            <div key={index}> 
                                <img src={data.image} alt='Various News Gallery' className='tnews-img'/>
                                <p className='tnews-ptext'><a href={data.url} className='tnews-link'>{data.title}</a></p>
                            </div>
                           ))}
                        </div>
                    </div>

                </div>
            :null}
            
        </>
) : (
  <p>No news available to display.</p>
)}


        {videoAPi.length>0&&(

            
            <div className='videos'>
                
                <div className='iframe-videos'>
                    <iframe src={`https://www.youtube.com/embed/${videoID}`}  className='iframe' title='Youtube video' allowFullScreen frameBorder='0'/>
                    
               </div>


               <div className='allSubVideos'>
                {videoAPi.map((trending, index)=>
                    <div className='videoTitle' key={index}>
                                        
                        <div>
                            <img src={trending.thumbnail} alt='This is a youtube trending Video' className='video-img' onClick={()=>videoPlay(trending.link)}/>
                        </div>

                        <div>
                            {trending.title && (<h3>{trending.title}</h3>)}
                            <p>{trending.published_time}</p>
                            <p>Length: {trending.length}</p>
                            <div className='title-details'></div>
                        </div>

                    

                    </div>
                )}
               </div> 

               
            </div> 
        



        )}
              


{/* -------------------------------------------------Football News & League Tables------------------------------------------------------------------- */}

        {sportsNews.length > 0 && sportsNews2.length > 0 ?(
            <> 
            <div ref={scrollSports}> </div>
            <div ref={scrollLaligaSports}> </div>
            <div ref={scrollSeriaSports}> </div>
            <div ref={scrollGermanSports}> </div>
            <div ref={scrollFranceSports}> </div>
            <h2 className='section-title st-1 T-news'>
                🏐 Sport News {PremierLeagueNews?<span>Premier League News</span>:null} 
                    {LaligaLeagueNews? <span>LaligaNews</span>:null} 
                    {SeriaLeagueNews?<span>Italian News</span>:null}
                    {germanyLeagueNews?<span>German Sport News</span>:null}
                    {franceLeagueNews?<span>France Sport News</span>:null}
            </h2>
        
            <div className='sportsPart'>    
            
                <div className='hd-2'>
                    {sportsNews.map((article, index) => (
                        <div className='news-card' key={index}>
                            {article.urlToImage && (<img src={article.urlToImage} alt='news' className='news-image' />
                            )}
                            <div className='news-content'>
                                <h3 className='news-title'>{article.title}</h3>
                                <p className='news-description'>{article.description}</p>
                                <div className='timeDate'>
                                    <a href={article.url} target='_blank' rel='noreferrer' className='Read-more'>Read more</a>
                                    <p className='date'>|</p>
                                    <p className='date'>{new Date(article.publishedAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            
                <div>
                    <button onClick={LeagueTableBtn} className='btn-table'>{isLeagueClicked? <span>Close League Table</span>:<span>Show League Table</span>}</button>
                    
                    {isLeagueClicked?
                    
                        <div>
                        <p className='table-heading'><span className='table-heading-year'>{leagueTableYear?.[6]?.league_season}</span>League Table</p>
                        <div className='league-tables'>
                            <div><p className='table-text'>P.No</p></div>
                            <div><p className='table-text'>Club</p></div>
                            <div><p className='table-text'>MP</p></div>
                            <div><p className='table-text'>W</p></div>
                            <div><p className='table-text'>D</p></div>
                            <div><p className='table-text'>L</p></div>
                            <div><p className='table-text'>Pts</p></div>
                            <div><p className='table-text'>GF</p></div>
                            <div><p className='table-text'>GA</p></div>
                        </div>

                        
                            {leagueTable2.length>0 ?
                            
                            (leagueTable2.map((article, index)=>{

                                const position=Number(article.overall_league_position);

                                let backgroundColor=''
                                if(position<=5){
                                    backgroundColor='blue-color';
                                }else if(position>=leagueTable2.length-2){
                                    backgroundColor='red-color'
                                } else if(position===6){
                                    backgroundColor='yellow-color'
                                }
                                        

                                return(
                                    <div key={index} className={`league-tables ${backgroundColor} `}>
                                        <p>{article.overall_league_position}</p>
                                        <p>{article.team_name}</p>
                                        <p>{article.overall_league_payed}</p>
                                        <p>{article.overall_league_W}</p>
                                        <p>{article.overall_league_D}</p>
                                        <p>{article.overall_league_L}</p>
                                        <p>{article.overall_league_PTS}</p>
                                        <p>{article.overall_league_GF}</p>
                                        <p>{article.overall_league_GA}</p>
                                    </div>
                                )
                            }))
                            
                            :   <></>
                            }
                            <div className='key-boxes'>    
                                <div>
                                    <p>Champions League</p>
                                    <div className='key-box blue-color'> </div>
                                </div>
                                
                                <div>
                                    <p>Europa League</p>
                                    <div className='key-box yellow-color'> </div>
                                </div>
                                
                                <div>
                                    <p>Relegation </p>
                                    <div className='key-box red-color'> </div>
                                </div>
                            </div>
                    </div>
                    
                    :<></>
                    
                    }

                    <p className='fixtures'>Upcoming Fixtures</p>
                        <p className='fix-text'>2024/2025 Football Calendar is complete..</p>
                    

                    {Array.isArray(sportsNews3)&&sportsNews3.length>0?(
                        <div className='Gnews'>
                            <img src={sportsNews3[currentIndex]?.image} className='img-GNews'/>
                            <p className='title-GNews'>{sportsNews3[currentIndex]?.title}
                                <span><a href={sportsNews3[currentIndex]?.url} className='GNews-link'>
                                    Read More...</a>
                                </span>
                            </p>
                        </div>

                    ):null
                    
                    }  
                    

                        {currentLeague?
                            <div className='search-Gnews'>
                                
                                <p className='pl-news' onClick={()=>setPNewsClicked(!isPNewsClicked)}>
                                    More{PremierLeagueNews?' Premier League News':null} 
                                        {LaligaLeagueNews?' Laliga League News':null}
                                        {SeriaLeagueNews? 'Seria A News':null} 
                                        {germanyLeagueNews? ' Bundesliga News': null}
                                        {franceLeagueNews? ' Ligue1 News': null}
                                    
                                    { isPNewsClicked?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                            className="appearIcon">
                                            <path strokeLinecap="round" strokeLinejoin="round" 
                                            d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
                                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                            className="appearIcon">
                                            <path strokeLinecap="round" strokeLinejoin="round" 
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    }
                                    <span><img className='img-league' src={leagueTableYear[6]?.league_logo} alt='league pix' /></span>
                                </p>
                                    
                                    {isPNewsClicked&&Array.isArray(sportsNews4)&& sportsNews4.map((article, index)=>(
                                        <div>
                                            <p className='more-news-text' key={index}>{article?.title}
                                                <span className='source-text'>
                                                    {`Source: ${article?.source?.name}`}
                                                </span>
                                            </p>

                                            <p className='GL1'>
                                                <a href={article?.url} className='GNews-link Gl'>
                                                    Read More...
                                                </a>
                                            </p>

                                        </div>
                                    ))
                                    
                                    
                                    }

                            </div>
                        :   <></>
                        }        
                        

                </div>



            <div className='hd-2'>
                {sportsNews2.map((article, index) => (
                    <div className='news-card' key={index}>
                    {article.image_url && (
                        <img src={article.image_url} alt='news' className='news-image' />
                    )}
                        <div className='news-content'>
                            <h3 className='news-title'>{article.title}</h3>
                            <p className='news-description'>{article.description}</p>
                            <div className='timeDate'>
                                <a href={article.link} target='_blank' rel='noreferrer' className='Read-more'>Read more</a>
                                <p className='date'>|</p>
                                <p className='date'>{new Date(article.pubDate).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        </>
        )
        :null
        }

        {Array.isArray(musicNews)&&musicNews.length>0 ?
            <div className='music-part'>
            
                <p className='music-header'>
                    Music News {`>`} 
                    {naijaMusicNews?<span> Naija Zone</span>:null}
                    {foreignMusicNews?<span> Foreign Zone</span>:null}
                </p>
                    <div ref={musicRef}></div>
             
                <div className='music-apis'>
                    
                    <div className='music-img'>
                        <img src={musicNews[currentMusicIndex]?.image_url} alt='Music Photo' className='img-news'/>      
                    </div>
                    

                    <div className='music-txt'>
                        <h2 className='music-title'>{musicNews[currentMusicIndex]?.title}</h2>
                        <p className='music-content'>{musicNews[currentMusicIndex]?.description}</p>
                        <a href={musicNews[currentMusicIndex]?.link} className='music-link'>Read more..</a>
                    </div>

                </div>

            </div>
            :
            null

        }

       
        {otherMusicNews.length>0 && otherMusicNews2.length>0 ?(    
            <div>
                <h2 className='music-others'>More Musical News{` >`}</h2>

                <div className='music-flex'>
                    
                    <div  className='first-music'>
                        <div className='line-through' /> 
                        
                        <div> 
                            <img src={otherMusicNews[currentOtherMusicIndex]?.urlToImage} alt='Music Photo' className='img-others-pix'/>
                        </div>   

                        <div className='all-music-text'>
                            <h2 className='music-title'>{otherMusicNews[currentOtherMusicIndex]?.title}</h2>
                            <p className='music-description'>{otherMusicNews[currentOtherMusicIndex]?.description}</p>
                            <a href={otherMusicNews[currentOtherMusicIndex]?.link} className='music-link'>Read more..</a>
                    </div>

                    </div>
                    

                    <div className='second-music'>
                        <div className='line-through' />
                        
                        <div>
                            <img src={otherMusicNews2[currentOtherMusicIndex2]?.image} alt='Music Photo' className='img-others-pix'/>
                        </div>   

                        <div className='all-music-text'>
                            <h2 className='music-title'>{otherMusicNews2[currentOtherMusicIndex2]?.title}</h2>
                            <p className='music-description'>{otherMusicNews2[currentOtherMusicIndex2]?.description}</p>
                            <a href={otherMusicNews2[currentOtherMusicIndex2]?.url} className='music-link'>Read more..</a>
                        </div>

                    </div>
                
                </div>

            </div>

            )
        :null
        }
        

    </section>


          


        </div>

        {/* <div>
            {JSON.stringify(datas, null,2)}
        </div> */}

    
    </div>


    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </>
    
  )
}

export default NewsApi
// target="_blank"
// target="_blank"
// target="_blank"