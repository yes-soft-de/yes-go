<?php


namespace App\Request;


class UpdateServiceRequest
{
    public $id;
    public $name;
    public $priceForOneHour;
    public $details;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getPriceForOneHour()
    {
        return $this->priceForOneHour;
    }

    /**
     * @param mixed $priceForOneHour
     */
    public function setPriceForOneHour($priceForOneHour): void
    {
        $this->priceForOneHour = $priceForOneHour;
    }

    /**
     * @return mixed
     */
    public function getDetails()
    {
        return $this->details;
    }

    /**
     * @param mixed $details
     */
    public function setDetails($details): void
    {
        $this->details = $details;
    }


}