import { Canvas, extend } from "@react-three/fiber";
import { geometry } from "maath";
import Frame from "./components/Frame";
import { Gltf } from "@react-three/drei";
import Rig from "./components/Rig";
import { useLocation, useRoute } from "wouter";

extend(geometry);

export default function App() {
  const [, params] = useRoute("/item/:id");
  const [, setLocation] = useLocation();
  return (
    <>
      <Canvas
        camera={{ fov: 75, position: [0, 0, 20] }}
        eventSource={document.getElementById("root")}
        eventPrefix="client"
      >
        <color attach="background" args={["#f0f0f0"]} />
        <Frame
          id="01"
          name={`flan`}
          author="Derenik Khachatryan"
          bg="#e4cdac"
          position={[-1.15, 0, 0]}
          rotation={[0, 0.5, 0]}
        >
          <Gltf
            src="pickles_3d_version_of_hyuna_lees_illustration-transformed.glb"
            scale={8}
            position={[0, -0.7, -2]}
          />
        </Frame>
        <Frame id="02" name="fstan" author="Derenik Khachatryan">
          <Gltf src="fiesta_tea-transformed.glb" position={[0, -2, -3]} />
        </Frame>
        <Frame
          id="03"
          name={`gmbr\ndilos`}
          author="Derenik Khachatryan"
          bg="#d1d1ca"
          position={[1.15, 0, 0]}
          rotation={[0, -0.5, 0]}
        >
          <Gltf
            src="still_life_based_on_heathers_artwork-transformed.glb"
            scale={2}
            position={[0, -0.8, -4]}
          />
        </Frame>
        <Rig />
      </Canvas>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <a
          style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}
          href="#"
          onClick={() => setLocation("/")}
        >
          {params ? "< back" : "double click to enter portal"}
        </a>
      </div>
    </>
  );
}
