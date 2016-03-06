{
  "requests":[
    {
      "image":
      {
        "content": ""
      },
      "features":[
        {
          "type":"LABEL_DETECTION",
          "maxResults":5
        }
      ]
    }
  ]
}

httpget
Service account created
The service account "eco-palisade" was given editor permission for the project.

The accounts public/private key pair My Project-1067c80c0937.json has been saved on your computer. This is the only copy of the key, so store it securely.

curl -v -k -s -H "Content-Type: application/json" https://vision.googleapis.com/v1/images:annotate?key=AIzaSyA34gNqYa9dpD_u4MCmrWUTi-zbQlSw0y --data-binary @document.json
