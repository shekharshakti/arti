"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import type { Group } from "three"

export default function SkillsModel() {
  const groupRef = useRef<Group>(null)

  const skills = [
    { name: "React", color: "#ff80bf", position: [0, 2, 0] },
    { name: "Node.js", color: "#c4b5fd", position: [2, 1, 1] },
    { name: "JavaScript", color: "#fcd34d", position: [-2, 0, 1] },
    { name: "HTML", color: "#f9a8d4", position: [0, -1, 2] },
    { name: "CSS", color: "#a5b4fc", position: [1, -2, 0] },
    { name: "MongoDB", color: "#a7f3d0", position: [-1, 0, -2] },
    { name: "C++", color: "#f9a8d4", position: [2, -1, -1] },
    { name: "Python", color: "#c4b5fd", position: [-2, 1, -1] },
  ]

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => (
        <group key={index} position={skill.position}>
          <mesh>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color={skill.color} emissive={skill.color} emissiveIntensity={0.5} />
          </mesh>
          <Text position={[0, 0.5, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
            {skill.name}
          </Text>
        </group>
      ))}

      {/* Connecting lines */}
      {skills.map((skill, i) =>
        skills.slice(i + 1).map((otherSkill, j) => (
          <line key={`${i}-${i + j + 1}`}>
            <bufferGeometry attach="geometry" />
            <lineBasicMaterial attach="material" color="#f9a8d4" opacity={0.2} transparent />
          </line>
        )),
      )}
    </group>
  )
}
