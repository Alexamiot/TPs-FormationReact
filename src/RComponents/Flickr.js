import React, {Component} from 'react';
const key= 'd4d0a0b3867b78fdbf1ce905ae9be3d5';

//Récupère la liste de mes albums
const url3= 'https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=d4d0a0b3867b78fdbf1ce905ae9be3d5&user_id=181782679%40N06&format=json&nojsoncallback=1';
//Récupère l'album de l'italie
const url='https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+key+'&photoset_id=72157708867124998&user_id=181782679%40N06&format=json&nojsoncallback=1';
//Recupère l'album de Granville
const url2='https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=d4d0a0b3867b78fdbf1ce905ae9be3d5&photoset_id=72157708871078383&user_id=181782679%40N06&format=json&nojsoncallback=1'



class FlickR extends Component {
    constructor(props){
        super(props);
        this.state={
            albums:[],
            pictures:[],
            AlbumOnScreen:1
        };
    }
    getAlbumList(){
        fetch(url3).then(function(response){

            return response.json();
        })
            .then(function(data){
                let list = data.photosets.photoset.map((album)=>{
                    return(
                        album.title._content)
                });
                this.setState({albums:list});
            }.bind(this))
    }
    switchAlbum(e){
    console.log(this.state.albums);
        if(e.target.innerHTML===this.state.albums[0]){
            this.getAlbum(url2);
        }
        else if(e.target.innerHTML===this.state.albums[1]){
            this.getAlbum(url);
            this.setState({AlbumOnScreen: this.state.AlbumOnScreen+1})
            }
    }

    getAlbum(url){
        fetch(url).then(function(response){

            return response.json();

        })
            .then(function(data){
                let picArray = data.photoset.photo.map((pic)=>{
                    var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
                    return(
                        <div className="photos">
                            <img style={{width:'100%', maxWidth:700 ,height:'auto'}} alt='Album' src={srcPath}/>
                            <h5>{pic.title}</h5>
                        </div>)
                })
                this.setState({pictures:picArray});
            }.bind(this))
    }

    componentDidMount() {
        this.getAlbumList();
        this.getAlbum(url);
    }




    render() {

        return (
            <div>
                <div className='AlbumChoice'> {
                    this.state.albums.map((album)=> {
                    return (
                        <button className='bouttonAlbum' onClick={(e) => this.switchAlbum(e)}>{album}</button>)
                })}
                </div>
                <div className='Album'> {this.state.pictures} </div>
            </div>
        );
    }
}

export default FlickR;