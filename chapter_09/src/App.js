import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Videos from './pages/Videos'
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';

// 원하는 경로를 작성
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{index: true, element: <Home />},
			{path: 'videos', element: <Videos />},
			{path: 'videos/:videosId', element: <VideoDetail />},
		],
	},
	// {
	// 	path: '/videos',
	// 	element: <Videos />,
	// }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
