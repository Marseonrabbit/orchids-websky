import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { 
  Float, 
  ContactShadows,
  Box,
  Torus,
  Sphere,
  Environment,
  MeshTransmissionMaterial,
  Icosahedron,
  Octahedron,
  Tetrahedron,
  View
} from '@react-three/drei';
import * as THREE from 'three';

// --- SERVICE SPECIFIC ANIMATIONS ---

const WebSystemsAnimation = ({ color, isHovered }) => {
  const group = useRef();
  const screenRef = useRef();
  
  const lineWidths = useMemo(() => 
    [...Array(6)].map((_, i) => 0.2 + (Math.sin(i * 1.5) + 1) * 0.3)
  , []);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.3) * 0.1;
      group.current.position.z = isHovered ? 0.5 : 0;
    }
    if (screenRef.current) {
      screenRef.current.emissiveIntensity = 1 + Math.sin(t * 5) * 0.5;
    }
  });

  return (
    <group ref={group} position={[0, -0.4, 0.8]}>
      <Box args={[3, 0.05, 1.5]} position={[0, -0.6, 0]}>
        <MeshTransmissionMaterial backside thickness={0.5} chromaticAberration={0.02} color={color} transparent opacity={0.2} samples={2} />
      </Box>
      <group position={[0, 0, 0]} rotation={[-0.1, 0, 0]}>
        <Box ref={screenRef} args={[1.5, 0.9, 0.02]} position={[0, 0.2, 0]}>
          <meshStandardMaterial color="#000" emissive={color} emissiveIntensity={1.5} transparent opacity={0.4} />
        </Box>
        {lineWidths.map((width, i) => (
          <Box key={i} args={[width, 0.015, 0.01]} position={[-0.4, 0.5 - i * 0.1, 0.05]}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={5} />
          </Box>
        ))}
      </group>
    </group>
  );
};

const SearchIntelligenceAnimation = ({ color, isHovered }) => {
  const group = useRef();
  const rings = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.4;
      group.current.scale.setScalar(isHovered ? 1.2 : 1);
    }
    rings.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.x = t * (0.2 + i * 0.1);
        ring.rotation.z = t * (0.1 + i * 0.05);
      }
    });
  });

  return (
    <group ref={group} position={[0, 0, 0.8]}>
      <Icosahedron args={[0.4, 1]}>
        <MeshTransmissionMaterial thickness={1} chromaticAberration={0.1} color={color} samples={2} />
      </Icosahedron>
      {[0.8, 1.1, 1.4].map((radius, i) => (
        <Torus 
          key={i} 
          ref={el => rings.current[i] = el} 
          args={[radius, 0.005, 8, 48]}
        >
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </Torus>
      ))}
    </group>
  );
};

const PerformanceAdsAnimation = ({ color, isHovered }) => {
  const group = useRef();
  const shards = useMemo(() => 
    [...Array(6)].map((_, i) => ({
      pos: [Math.sin(i) * 0.8, Math.cos(i) * 0.8, 0],
      rot: [Math.sin(i * 1.5) * Math.PI, Math.cos(i * 1.8) * Math.PI, 0]
    }))
  , []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = Math.sin(t * 2) * 0.1;
      group.current.rotation.z = isHovered ? t * 0.5 : 0;
    }
  });

  return (
    <group ref={group} position={[0, 0, 1]}>
      {shards.map((shard, i) => (
        <Octahedron key={i} args={[0.15, 0]} position={shard.pos} rotation={shard.rot}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={isHovered ? 10 : 2} />
        </Octahedron>
      ))}
      <Tetrahedron args={[0.3, 0]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#fff" emissive={color} emissiveIntensity={5} />
      </Tetrahedron>
    </group>
  );
};

const SocialSynthesisAnimation = ({ color, isHovered }) => {
  const group = useRef();
  const nodes = useMemo(() => 
    [...Array(8)].map((_, i) => ({
      pos: [Math.sin(i * 1.2) * 1, Math.cos(i * 1.5) * 1, Math.sin(i * 0.8) * 0.5],
    }))
  , []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={group} position={[0, 0, 0.5]}>
      {nodes.map((node, i) => (
        <group key={i}>
          <Sphere args={[0.06, 8, 8]} position={node.pos}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={isHovered ? 5 : 1} />
          </Sphere>
          {i > 0 && (
            <mesh position={[node.pos[0]/2, node.pos[1]/2, node.pos[2]/2]}>
              <boxGeometry args={[0.005, 0.005, 1.5]} />
              <meshStandardMaterial color={color} transparent opacity={0.2} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
};

const NarrativeDesignAnimation = ({ color, isHovered }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3;
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.scale.setScalar(isHovered ? 1.5 : 1);
    }
  });

  return (
    <group position={[0.8, 0, 1]}>
      <Torus ref={meshRef} args={[0.4, 0.15, 16, 48]}>
        <MeshTransmissionMaterial 
          thickness={1.5} 
          distortion={0.5} 
          temporalDistortion={0.2} 
          color={color} 
          transmission={1}
          samples={2}
        />
      </Torus>
      <Float speed={5}>
        <Sphere args={[0.1, 16, 16]} position={[0, 0, 0.5]}>
          <meshStandardMaterial color="#fff" emissive={color} emissiveIntensity={10} />
        </Sphere>
      </Float>
    </group>
  );
};

const InfiniteCommerceAnimation = ({ color, isHovered }) => {
  const group = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.5;
      group.current.scale.setScalar(isHovered ? 1.3 : 1);
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 1.2]}>
      <Box args={[0.6, 0.6, 0.6]}>
        <MeshTransmissionMaterial backside thickness={0.5} color={color} transparent opacity={0.4} samples={2} />
      </Box>
      <Box args={[0.55, 0.55, 0.55]}>
        <meshStandardMaterial color={color} wireframe />
      </Box>
      {[...Array(3)].map((_, i) => (
        <Octahedron key={i} args={[0.1, 0]} position={[Math.sin(i * 2) * 0.6, 0.4, Math.cos(i * 2) * 0.6]}>
          <meshStandardMaterial color="#fff" emissive={color} emissiveIntensity={5} />
        </Octahedron>
      ))}
    </group>
  );
};

// --- BASE CHARACTER ---

const CharacterBody = ({ color, type, isHovered }) => {
  const bodyRef = useRef();
  const headRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (bodyRef.current) {
      bodyRef.current.position.y = Math.sin(t * 0.8) * 0.1;
      bodyRef.current.rotation.y = Math.sin(t * 0.4) * 0.1;
    }
    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(t * 1.5) * 0.05;
      if (isHovered) {
        headRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
      } else {
        headRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group ref={bodyRef}>
      <group ref={headRef} position={[0, 0.4, 0]}>
        <mesh>
          <sphereGeometry args={[0.45, 32, 32]} />
          <MeshTransmissionMaterial 
            backside 
            samples={2} 
            thickness={0.5} 
            chromaticAberration={0.05} 
            distortion={0.2} 
            color={isHovered ? "#fff" : color}
          />
        </mesh>
        <Box args={[0.6, 0.03, 0.15]} position={[0, 0, 0.4]}>
          <meshStandardMaterial color="#fff" emissive={color} emissiveIntensity={10} />
        </Box>
        <Sphere args={[0.15, 16, 16]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={5} />
        </Sphere>
      </group>

      {[...Array(4)].map((_, i) => (
        <mesh key={i} position={[0, 0 - i * 0.3, 0]}>
          <sphereGeometry args={[0.07 - i * 0.01, 8, 8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </mesh>
      ))}

      <group position={[0, -0.8, 0]}>
        <Icosahedron args={[0.4, 1]}>
          <MeshTransmissionMaterial backside thickness={0.5} color={isHovered ? "#fff" : "#050505"} samples={2} />
        </Icosahedron>
        <Icosahedron args={[0.42, 1]}>
          <meshStandardMaterial color={color} wireframe transparent opacity={0.1} />
        </Icosahedron>
      </group>

      <group>
        {type === 1 && <WebSystemsAnimation color={color} isHovered={isHovered} />}
        {type === 2 && <SearchIntelligenceAnimation color={color} isHovered={isHovered} />}
        {type === 3 && <PerformanceAdsAnimation color={color} isHovered={isHovered} />}
        {type === 4 && <SocialSynthesisAnimation color={color} isHovered={isHovered} />}
        {type === 5 && <NarrativeDesignAnimation color={color} isHovered={isHovered} />}
        {type === 6 && <InfiniteCommerceAnimation color={color} isHovered={isHovered} />}
      </group>
    </group>
  );
};

export const CharacterScene = ({ color, type, isHovered }) => (
  <>
    <ambientLight intensity={0.2} />
    <spotLight position={[5, 5, 5]} angle={0.25} penumbra={1} intensity={2} color={color} />
    <spotLight position={[-5, 5, 5]} angle={0.25} penumbra={1} intensity={1} color="#fff" />
    <pointLight position={[0, 0, 2]} intensity={1} color={color} />
    
    <Float speed={isHovered ? 4 : 2} rotationIntensity={isHovered ? 0.5 : 0.2} floatIntensity={1}>
      <CharacterBody color={color} type={type} isHovered={isHovered} />
    </Float>

    <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={10} blur={2} far={4} color="#000" />
    <Environment preset="night" />
  </>
);

const ServiceCharacter3D = ({ color, type, isHovered, className, trackingRef }) => {
  return (
    <div ref={trackingRef} className={`w-full h-full ${className}`}>
      <View index={type}>
        <CharacterScene color={color} type={type} isHovered={isHovered} />
      </View>
    </div>
  );
};

export default ServiceCharacter3D;
