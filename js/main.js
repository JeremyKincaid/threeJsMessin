const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

            // const light = new THREE.AmbientLight( 0x404040 ); // soft white light
            // scene.add( light );
            
            //point light constructor
            //PointLight( color : Integer, intensity : Float, distance : Number, decay : Float )
            const pLight = new THREE.PointLight( 0xdf03fc, 1, 0, 1 );
            pLight.position.set( 0, 5, -5 );
            scene.add( pLight );
            const pLight2 = new THREE.PointLight( 0x2c0ddb, 1, 0, 1 );
            pLight2.position.set( 0, -5, -5 );
            scene.add( pLight2 );

            // const sphereSize = 2;
            // const pointLightHelper = new THREE.PointLightHelper( pLight, sphereSize );
            // scene.add( pointLightHelper );
            // const pointLightHelper2 = new THREE.PointLightHelper( pLight2, sphereSize );
            // scene.add( pointLightHelper2 );


            const geometry = new THREE.ConeGeometry(5, 5, 4);
            let matParams = { color: 0xffffff, emmisive: 0xdf03fc, emmisiveIntensity: 10}
            const material = new THREE.MeshStandardMaterial( matParams );

            const pyramid0 = new THREE.Mesh( geometry, material );
            pyramid0.position.set(0, -5, -10);

            const pyramid1 = new THREE.Mesh( geometry, material );
            pyramid1.position.set(10, -5, -10);

            const pyramid2 = new THREE.Mesh( geometry, material );
            pyramid2.position.set(-10, -5, -10);

            const pyramid3 = new THREE.Mesh( geometry, material );
            pyramid3.position.set( 5, 0, -10);

            const pyramid4 = new THREE.Mesh( geometry, material );
            pyramid4.position.set( -5, 0, -10);

            const pyramid5 = new THREE.Mesh( geometry, material );
            pyramid5.position.set( 15, 0, -10);

            const pyramid6 = new THREE.Mesh( geometry, material );
            pyramid6.position.set( -15, 0, -10);

            const pyramid7 = new THREE.Mesh( geometry, material );
            pyramid7.position.set( 0, 5, -10);

            const pyramid8 = new THREE.Mesh( geometry, material );
            pyramid8.position.set( 10, 5, -10);

            const pyramid9 = new THREE.Mesh( geometry, material );
            pyramid9.position.set( -10, 5, -10);
            
            let pyramids = [pyramid0, pyramid1, pyramid2, pyramid3, pyramid4, pyramid5, pyramid6, pyramid7, pyramid8, pyramid9];

            pyramids.forEach(p => scene.add(p));
            
            const dimaryp0 = new THREE.Mesh( geometry, material );
            dimaryp0.position.set(0, -10, -10);

            const dimaryp1 = new THREE.Mesh( geometry, material );
            dimaryp1.position.set(10, -10, -10);

            const dimaryp2 = new THREE.Mesh( geometry, material );
            dimaryp2.position.set(-10, -10, -10);

            const dimaryp3 = new THREE.Mesh( geometry, material );
            dimaryp3.position.set( 5, -5, -10);

            const dimaryp4 = new THREE.Mesh( geometry, material );
            dimaryp4.position.set( -5, -5, -10);

            const dimaryp5 = new THREE.Mesh( geometry, material );
            dimaryp5.position.set( 15, -5, -10);

            const dimaryp6 = new THREE.Mesh( geometry, material );
            dimaryp6.position.set( -15, -5, -10);

            const dimaryp7 = new THREE.Mesh( geometry, material );
            dimaryp7.position.set( 0, 0, -10);

            const dimaryp8 = new THREE.Mesh( geometry, material );
            dimaryp8.position.set( 10, 0, -10);

            const dimaryp9 = new THREE.Mesh( geometry, material );
            dimaryp9.position.set( -10, 0, -10);
            
            let dimaryps = [dimaryp0, dimaryp1, dimaryp2, dimaryp3, dimaryp4, dimaryp5, dimaryp6, dimaryp7, dimaryp8, dimaryp9];

            dimaryps.forEach(d => d.rotation.x = 3.14);
            dimaryps.forEach(d => scene.add(d));

            function rotatePyramids(){
                pyramids.forEach(p => p.rotation.x += 0.01);
            }

            function rotateDimaryps(){
                dimaryps.forEach(d => d.rotation.x += -0.01)
            }

            camera.position.z = 5;
            
            let moveRight = true;

            function movePointLight() {
                let xCoord = pLight.position.x;

                if( xCoord <= -36.0){
                    moveRight = true;
                } else if( xCoord >= 36.0 ){
                    moveRight = false;
                }

                if(moveRight){
                    pLight.position.x += 0.2;
                } else {
                    pLight.position.x -= 0.2;
                }
                
            }


            let moveRight2 = false;
            function movePointLight2() {
                let xCoord2 = pLight2.position.x;

                if( xCoord2 <= -36.0){
                    moveRight2 = true;
                } else if( xCoord2 >= 36.0 ){
                    moveRight2 = false;
                }

                if(moveRight2){
                    pLight2.position.x += 0.2;
                } else {
                    pLight2.position.x -= 0.2;
                }
                
            }

            function animate() {
	            requestAnimationFrame( animate );
                rotatePyramids();
                rotateDimaryps();
                movePointLight();
                movePointLight2();
	            renderer.render( scene, camera );
            }
            animate();