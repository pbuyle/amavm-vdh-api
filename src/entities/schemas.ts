/**
 * This code was generated by the uno cli.
 *
 * Manual changes may cause incorrect behavior and will be lost if
 * the code is regenerated.
 */
// tslint:disable

export const getObservationsRequestSortSchema = {
  enum: ["timestamp-asc", "timestamp-desc"],
  type: "string",
};

export const getObservationsRequestSchema = {
  additionalProperties: false,
  properties: {
    endTs: {
      description: "The end timestamp. Unix Epoch in seconds.",
      type: "number",
    },
    nextToken: {
      description: "The next continuation token.",
      type: "string",
    },
    sort: getObservationsRequestSortSchema,
    startTs: {
      description: "The start timestamp. Unix Epoch in seconds.",
      type: "number",
    },
  },
  required: ["sort"],
  type: "object",
};

export const assetContentTypeSchema = {
  enum: ["image/jpeg", "image/png"],
  type: "string",
};

export const reportedObservationAssetSchema = {
  additionalProperties: false,
  description: "An asset attached alongside a ReportedObservation.",
  properties: {
    contentType: assetContentTypeSchema,
    url: {
      description: "Base-64 encoded data.",
      type: "string",
    },
  },
  required: ["contentType", "url"],
  type: "object",
};

export const reportedObservationSchema = {
  additionalProperties: false,
  description: "A reported observation",
  properties: {
    assets: {
      description: "Associated assets.",
      items: reportedObservationAssetSchema,
      type: "array",
    },
    attributes: {
      description: "Attributes to further characterize the observation.",
      items: {
        type: "string",
      },
      type: "array",
    },
    comment: {
      description: "Free-form comments.",
      type: "string",
    },
    deviceId: {
      description: "A device identifier (the reporting device).",
      type: "string",
    },
    id: {
      description: "Unique id",
      type: "string",
    },
    position: {
      description: "A GeoJSON position for the observation. Be careful - GeoJson Positions are [long, lat, elevation]",
      items: {
        type: "number",
      },
      type: "array",
    },
    timestamp: {
      description: "A timestamp of when the observation was done. Unix Epoch in seconds.",
      type: "number",
    },
  },
  required: ["deviceId", "id", "position", "timestamp"],
  type: "object",
};

export const observationRequestAssetSchema = {
  additionalProperties: false,
  description: "An asset submitted alongside an ObservationRequest.",
  properties: {
    contentType: assetContentTypeSchema,
    data: {
      description: "Base-64 encoded data.",
      type: "string",
    },
  },
  required: ["contentType", "data"],
  type: "object",
};

export const observationRequestSchema = {
  additionalProperties: false,
  description: "Request to submit an observation.",
  properties: {
    assets: {
      description: "Attached assets.",
      items: observationRequestAssetSchema,
      type: "array",
    },
    attributes: {
      description: "Attributes to further characterize the observation.",
      items: {
        type: "string",
      },
      type: "array",
    },
    comment: {
      description: "Free-form comments.",
      type: "string",
    },
    deviceId: {
      description: "A device identifier (the reporting device).",
      type: "string",
    },
    position: {
      description: "A GeoJSON position for the observation. Be careful - GeoJson Positions are [long, lat, elevation]",
      items: {
        type: "number",
      },
      type: "array",
    },
    timestamp: {
      description: "A timestamp of when the observation was done. Unix Epoch in seconds.",
      type: "number",
    },
  },
  required: ["deviceId", "position", "timestamp"],
  type: "object",
};

export const observationBaseSchema = {
  additionalProperties: false,
  description: "Base definition for observations.",
  properties: {
    attributes: {
      description: "Attributes to further characterize the observation.",
      items: {
        type: "string",
      },
      type: "array",
    },
    comment: {
      description: "Free-form comments.",
      type: "string",
    },
    deviceId: {
      description: "A device identifier (the reporting device).",
      type: "string",
    },
    position: {
      description: "A GeoJSON position for the observation. Be careful - GeoJson Positions are [long, lat, elevation]",
      items: {
        type: "number",
      },
      type: "array",
    },
    timestamp: {
      description: "A timestamp of when the observation was done. Unix Epoch in seconds.",
      type: "number",
    },
  },
  required: ["deviceId", "position", "timestamp"],
  type: "object",
};

export const observationAssetBaseSchema = {
  additionalProperties: false,
  properties: {
    contentType: assetContentTypeSchema,
  },
  required: ["contentType"],
  type: "object",
};

export const observationStatusSchema = {
  description: "Status for an observation.",
  enum: ["ko", "ok"],
  type: "string",
};

export const bicyclePathsRequestSchema = {
  additionalProperties: false,
  properties: {
    bbox: {
      items: {
        type: "number",
      },
      maximum: 8,
      minimum: 8,
      type: "array",
    },
    borough: {
      description: "The name of the borough to filter.",
      type: "string",
    },
    limit: {
      description: "The number of returned elements in one shot.",
      type: "number",
    },
    near: {
      items: {
        type: "number",
      },
      maximum: 2,
      minimum: 2,
      type: "array",
    },
    network: {
      description: "Which network does this bicycle path belong to.",
      enum: ["3-seasons", "4-seasons", "unknown"],
      type: "string",
    },
    nextToken: {
      description: "The next continuation token.",
      type: "string",
    },
    numberOfLanes: {
      description: "The number of lanes",
      type: "number",
    },
    type: {
      description: "The type of bicycle path",
      enum: ["accotement-asphalte", "bande-cycleable", "chaussee-designee", "piste-cyclable-rue", "piste-cyclable-site-propre", "piste-cyclable-trottoir", "sentier-polyvalent", "unknown", "velorue"],
      type: "string",
    },
  },
  type: "object",
};

export const bicyclePathTypeSchema = {
  enum: ["accotement-asphalte", "bande-cycleable", "chaussee-designee", "piste-cyclable-rue", "piste-cyclable-site-propre", "piste-cyclable-trottoir", "sentier-polyvalent", "unknown", "velorue"],
  type: "string",
};

export const bicyclePathNetworkSchema = {
  enum: ["3-seasons", "4-seasons", "unknown"],
  type: "string",
};

export const bicyclePathDividerSchema = {
  enum: ["cloture", "delineateur", "jersey", "mail", "marquage-sol", "unknown"],
  type: "string",
};

export const bicyclePathSchema = {
  additionalProperties: false,
  description: "A bicycle path.",
  properties: {
    borough: {
      description: "The name of the borough.",
      type: "string",
    },
    divider: bicyclePathDividerSchema,
    geometry: {
      additionalProperties: false,
      description: "The GeoJson geometry. Be careful - GeoJson Positions are [long, lat, elevation]",
      properties: {
        coordinates: {
          items: {
            items: {
              items: {
                type: "number",
              },
              type: "array",
            },
            type: "array",
          },
          type: "array",
        },
        type: {
          enum: ["MultiLineString"],
          type: "string",
        },
      },
      required: ["coordinates", "type"],
      type: "object",
    },
    id: {
      description: "Unique id for the bicycle path",
      type: "string",
    },
    length: {
      description: "The length in meters",
      type: "number",
    },
    network: bicyclePathNetworkSchema,
    numberOfLanes: {
      description: "The number of lanes",
      type: "number",
    },
    type: bicyclePathTypeSchema,
  },
  required: ["borough", "divider", "geometry", "id", "length", "network", "numberOfLanes", "type"],
  type: "object",
};
