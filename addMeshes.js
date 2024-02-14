import {
	BoxGeometry,
	MeshBasicMaterial,
	MeshStandardMaterial,
	MeshLambertMaterial,
	MeshPhysicalMaterial,
	Mesh,
	SphereGeometry,
	RingGeometry,
	TextureLoader,
} from 'three'


const loader = new TextureLoader();



export const centerPlanet = () => {
	
	// const color = loader.load('/textures/Blue_Ice_001_COLOR.jpg')
	// const displace = loader.load('/textures/Blue_Ice_001_DISP.png')
	// const normal = loader.load('/textures/Blue_Ice_001_NORM.jpg')
	const centerPlanetGeometry = new SphereGeometry(0.5, 32, 16)
	const centerPlanetMaterial = new MeshPhysicalMaterial({
	// map: color,
	// displacementMap: displace,
	color: 0xff0000,
	// normalMap: normal,
	metalness: 0.0,
	roughness: 0.1,
	thickness: 0.0,
	})
	//mesh即geometry和material的结合
	const centerPlanetMesh = new Mesh(
	centerPlanetGeometry,
	centerPlanetMaterial
	)
	return centerPlanetMesh
	}

	
export const ring = () => {
	
	// const color = loader.load('/textures/Blue_Ice_001_COLOR.jpg')
	// const displace = loader.load('/textures/Blue_Ice_001_DISP.png')
	// const normal = loader.load('/textures/Blue_Ice_001_NORM.jpg')
	const ringGeometry = new RingGeometry(6,3,14,7,0,6)
	const ringMaterial = new MeshPhysicalMaterial({
	// map: color,
	// displacementMap: displace,
	color: 0xedc2c5,
	// normalMap: normal,
	metalness: 0.0,
	roughness: 0.1,
	thickness: 0.0,
	})
	//mesh即geometry和material的结合
	const ringMesh = new Mesh(
	ringGeometry,
	ringMaterial
	)
	ringMesh.position.set(0, 0, 5);
	return ringMesh
	}