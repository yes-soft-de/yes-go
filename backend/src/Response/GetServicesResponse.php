<?php


namespace App\Response;


class GetServicesResponse
{
    public $id;
    public $name;
    public $priceForOneHour;
    public $team;

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
    public function getTeam()
    {
        return $this->team;
    }

    /**
     * @param mixed $team
     */
    public function setTeam($team): void
    {
        $this->team = $team;
    }

}