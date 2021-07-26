import {VRML} from './utility/utility.js';

export const FieldModel = {
  'Appearance': {
    'supported': {'material': VRML.SFNode, 'texture': VRML.SFNode, 'textureTransform': VRML.SFNode},
    'unsupported': {'name': VRML.SFString}
  },
  'Background': {
    'supported': {},
    'unsupported': {}
  },
  'Billboard': {
    'supported': {'children': VRML.MFNode},
    'unsupported': {}
  },
  'Box': {
    'supported': {'size': VRML.SFVec3f},
    'unsupported': {}
  },
  'Capsule': {
    'supported': {'bottom': VRML.SFBool, 'height': VRML.SFFloat, 'radius': VRML.SFFloat, 'side': VRML.SFBool, 'top': VRML.SFBool, 'subdivision': VRML.SFInt32},
    'unsupported': {}
  },
  'Cone': {
    'supported': {'bottomRadius': VRML.SFFloat, 'height': VRML.SFFloat, 'side': VRML.SFBool, 'bottom': VRML.SFBool, 'subdivision': VRML.SFInt32},
    'unsupported': {}
  },
  'Cylinder': {
    'supported': {'bottom': VRML.SFBool, 'height': VRML.SFFloat, 'radius': VRML.SFFloat, 'side': VRML.SFBool, 'top': VRML.SFBool, 'subdivision': VRML.SFInt32},
    'unsupported': {'castLensFlares': VRML.SFBool}
  },
  'DirectionalLight': {
    'supported': {'ambientIntensity': VRML.SFFloat, 'color': VRML.SFColor, 'direction': VRML.SFVec3f, 'intensity': VRML.SFFloat, 'on': VRML.SFBool, 'castShadows': VRML.SFBool},
    'unsupported': {}
  },
  'ElevationGrid': {
    'supported': {'height': VRML.MFFloat, 'xDimension': VRML.SFInt32, 'xSpacing': VRML.SFFloat, 'zDimension': VRML.SFInt32, 'zSpacing': VRML.SFFloat, 'thickness': VRML.SFFloat},
    'unsupported': {}
  },
  'Fog': {
    'supported': {'color': VRML.SFColor, 'fogType': VRML.SFString, 'visibilityRange': VRML.SFFloat},
    'unsupported': {}
  },
  'Group': {
    'supported': {'children': VRML.MFNode},
    'unsupported': {}
  },
  'ImageTexture': {
    'supported': {'url': VRML.MFString, 'repeatS': VRML.SFBool, 'repeatT': VRML.SFBool, 'filtering': VRML.SFInt32},
    'unsupported': {}
  },
  'IndexedFaceSet': {
    'supported': {'coord': VRML.SFNode, 'normal': VRML.SFNode, 'height': VRML.MFFloat, 'texCoord': VRML.SFNode, 'ccw': VRML.SFBool, 'coordIndex': VRML.MFInt32, 'normalIndex': VRML.MFInt32, 'texCoordIndex': VRML.MFInt32},
    'unsupported': {'solid': VRML.SFBool, 'convex': VRML.SFBool, 'normalPerVertex': VRML.SFBool, 'creaseAngle': VRML.SFFloat}
  },
  'IndexedLineSet': {
    'supported': {'coord': VRML.SFNode, 'coordIndex': VRML.MFInt32},
    'unsupported': {}
  },
  'Material': {
    'supported': {'ambientIntensity': VRML.SFFloat, 'diffuseColor': VRML.SFColor, 'emissiveColor': VRML.SFColor, 'shininess': VRML.SFFloat, 'specularColor': VRML.SFColor, 'transparency': VRML.SFFloat},
    'unsupported': {}
  },
  'Mesh': {
    'supported': {},
    'unsupported': {'url': VRML.MFString}
  },
  'PBRAppearance': {
    'supported': {'baseColor': VRML.SFColor, 'baseColorMap': VRML.SFNode, 'transparency': VRML.SFFloat, 'roughness': VRML.SFFloat, 'roughnessMap': VRML.SFNode, 'metalness': VRML.SFFloat, 'metalnessMap': VRML.SFNode, 'IBLStrength': VRML.SFFloat, 'normalMap': VRML.SFNode, 'normalMapFactor': VRML.SFFloat, 'occlusionMap': VRML.SFNode, 'occlusionMapStrength': VRML.SFFloat, 'emissiveColor': VRML.SFColor, 'emissiveColorMap': VRML.SFNode, 'emissiveIntensity': VRML.SFFloat, 'textureTransform': VRML.SFNode},
    'unsupported': {'name': VRML.SFString}
  },
  'Plane': {
    'supported': {'size': VRML.SFVec2f},
    'unsupported': {}
  },
  'PointLight': {
    'supported': {'ambientIntensity': VRML.SFFloat, 'attenuation': VRML.SFVec3f, 'color': VRML.SFColor, 'intensity': VRML.SFFloat, 'location': VRML.SFVec3f, 'on': VRML.SFBool, 'radius': VRML.SFFloat, 'castShadows': VRML.SFBool},
    'unsupported': {}
  },
  'PointSet': {
    'supported': {'color': VRML.SFNode, 'coord': VRML.SFNode},
    'unsupported': {}
  },
  'Robot': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'scale': VRML.SFVec3f, 'children': VRML.MFNode},
    'unsupported': {'name': VRML.SFString, 'model': VRML.SFString, 'description': VRML.SFString, 'contactMaterial': VRML.SFString, 'immersionProperties': VRML.MFNode, 'boundingObject': VRML.SFNode, 'physics': VRML.SFNode, 'locked': VRML.SFBool, 'radarCrossSection': VRML.SFFloat, 'recognitionColors': VRML.MFColor, 'translationStep': VRML.SFFloat, 'rotationStep': VRML.SFFloat, 'linearVelocity': VRML.SFVec3f, 'angularVelocity': VRML.SFVec3f}
  },
  'Shape': {
    'supported': {'appearance': VRML.SFNode, 'geometry': VRML.SFNode, 'castShadow': VRML.SFBool, 'isPickable': VRML.SFBool},
    'unsupported': {}
  },
  'Solid': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'scale': VRML.SFVec3f, 'children': VRML.MFNode},
    'unsupported': {'name': VRML.SFString, 'model': VRML.SFString, 'description': VRML.SFString, 'contactMaterial': VRML.SFString, 'immersionProperties': VRML.MFNode, 'boundingObject': VRML.SFNode, 'physics': VRML.SFNode, 'locked': VRML.SFBool, 'radarCrossSection': VRML.SFFloat, 'recognitionColors': VRML.MFColor, 'translationStep': VRML.SFFloat, 'rotationStep': VRML.SFFloat, 'linearVelocity': VRML.SFVec3f, 'angularVelocity': VRML.SFVec3f, 'controller': VRML.SFString, 'controllerArgs': VRML.MFString, 'customData': VRML.SFString, 'supervisor': VRML.SFBool, 'synchronization': VRML.SFBool, 'battery': VRML.MFFloat, 'cpuConsumption': VRML.SFFloat, 'selfCollision': VRML.SFBool, 'showWindow': VRML.SFBool, 'window': VRML.SFString, 'remoteControl': VRML.SFString}
  },
  'Sphere': {
    'supported': {'radius': VRML.SFFloat, 'subdivision': VRML.SFInt32, 'ico': VRML.SFBool},
    'unsupported': {}
  },
  'SpotLight': {
    'supported': {'ambientIntensity': VRML.SFFloat, 'attenuation': VRML.SFVec3f, 'beamWidth': VRML.SFFloat, 'color': VRML.SFColor, 'cutOffAngle': VRML.SFFloat, 'direction': VRML.SFVec3f, 'intensity': VRML.SFFloat, 'location': VRML.SFVec3f, 'on': VRML.SFBool, 'radius': VRML.SFFloat, 'castShadows': VRML.SFBool},
    'unsupported': {}
  },
  'TextureTransform': {
    'supported': {'center': VRML.SFVec2f, 'rotation': VRML.SFFloat, 'scale': VRML.SFVec2f, 'translation': VRML.SFVec2f},
    'unsupported': {}
  },
  'Transform': {
    'supported': {'translation': VRML.SFVec3f, 'rotation': VRML.SFRotation, 'scale': VRML.SFVec3f, 'children': VRML.MFNode},
    'unsupported': {'translationStep': VRML.SFFloat, 'rotationStep': VRML.SFFloat}
  },
  'Viewpoint': {
    'supported': {},
    'unsupported': {}
  },
  'World': {
    'supported': {},
    'unsupported': {}
  }
};
