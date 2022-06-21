<?php

namespace App\Http\Traits;

use GuzzleHttp\Client;
use App\Exceptions\IsEmpty;
use App\Exceptions\IsNull;

trait JusibeTrait
{

    /**
     * Jusibe API Base Url
     */
    public $baseURL = 'https://jusibe.com';

    /**
     * key
     * @var string
     */
    public $publicKey;

    /**
     * Access token
     * @var string
     */
    public $accessToken;

    /**
     *  Response from requests made to Jusibe
     * @var mixed
     */
    public $response;

    /**
     * Instance of Guzzle Client
     * @var object
     */
    public $client;

    /**
     * Constructor
     * @param $publicKey   string
     * @param $accessToken string
     */
    public function instantiate($publicKey = null, $accessToken = null)
    {
        if (is_null($publicKey)) {
            throw IsNull::create("The Key can not be null. Please pass it to the constructor");
        }

        if (is_null($accessToken)) {
            throw IsNull::create("The Access Token can not be null. Please pass it to the constructor");
        }

        $this->publicKey = $publicKey;
        $this->accessToken = $accessToken;
        $this->prepareRequest();
    }

    /**
     * Instantiate Guzzle Client and prepare request for http operations
     * @return none
     */
    public function prepareRequest()
    {
        $this->client = new Client(['base_uri' => $this->baseURL]);
    }

    /**
     * Perform a GET request;'
     * @param  string $relativeUrl
     * @return none
     */
    public function performGetRequest($relativeUrl)
    {
        $this->response = $this->client->request('GET', $relativeUrl, [
            'auth' => [$this->publicKey, $this->accessToken]
        ]);
    }

    /**
     * Perform a POST request
     * @param  string $relativeUrl
     * @param  array $data
     * @return none
     */
    public function performPostRequest($relativeUrl, $data)
    {
        $this->response = $this->client->request('POST', $relativeUrl, [
            'auth' => [$this->publicKey, $this->accessToken],
            'form_params' => $data
        ]);
    }

    /**
     * Send SMS using the Jusibe API
     * @param  array $payload
     * @return $this
     */
    public function sendSMS($payload = [])
    {
        if (empty($payload)) {
            throw IsEmpty::create("Message Payload can not be empty. Please fill the appropriate details");
        }

        $this->performPostRequest('/smsapi/send_sms', $payload);

        return $this;
    }

    /**
     * Send Bulk SMS using the Jusibe API
     * @param  array $payload
     * @return $this
     */
    public function sendBulkSMS($payload = [])
    {
        if (empty($payload)) {
            throw IsEmpty::create("Message Payload can not be empty. Please fill the appropriate details");
        }

        if (empty($payload['to'])) {
            throw IsEmpty::create("Message destination can not be empty.");
        }

        $this->performPostRequest('/smsapi/bulk/send_sms', $payload);

        return $this;
    }

    /**
     * Check the available SMS credits left in your JUSIBE account
     * @return $this
     */
    public function checkAvailableCredits()
    {
        $this->performGetRequest('/smsapi/get_credits');

        return $this;
    }

    /**
     * Check the delivery status of a sent SMS
     * @param  string $messageID
     * @return $this
     */
    public function checkDeliveryStatus($messageID = null)
    {
        if (is_null($messageID)) {
            throw IsNull::create("Message ID can not be empty.");
        }

        $this->performGetRequest("/smsapi/delivery_status?message_id={$messageID}");

        return $this;
    }

    /**
     * Check the delivery status of a sent bulk SMS
     * @param  string $bulkID
     * @return $this
     */
    public function checkBulkDeliveryStatus($bulkID = null)
    {
        if (is_null($bulkID)) {
            throw IsNull::create("Bulk ID can not be empty.");
        }

        $this->performGetRequest("/smsapi/bulk/status?bulk_message_id={$bulkID}");

        return $this;
    }

    /**
     * Return the response object of any operation
     * @return object
     */
    public function getResponse()
    {
        return json_decode($this->response->getBody());
    }
}
